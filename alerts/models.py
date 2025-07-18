from django.db import models
from django.contrib.auth import get_user_model
from devices.models import Device

User = get_user_model()

class Alert(models.Model):
    ALERT_TYPES = [
        ('sos', 'SOS Button'),
        ('fall', 'Fall Detection'),
        ('panic', 'Panic Button'),
        ('low_battery', 'Low Battery'),
        ('geo_fence', 'Geo Fence'),
        ('medical', 'Medical Emergency'),
    ]
    
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('acknowledged', 'Acknowledged'),
        ('resolved', 'Resolved'),
        ('false_alarm', 'False Alarm'),
    ]
    
    PRIORITY_CHOICES = [
        ('low', 'Low'),
        ('medium', 'Medium'),
        ('high', 'High'),
        ('critical', 'Critical'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='alerts')
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name='alerts')
    alert_type = models.CharField(max_length=20, choices=ALERT_TYPES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, default='medium')
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    longitude = models.DecimalField(max_digits=9, decimal_places=6, null=True, blank=True)
    acknowledged_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='acknowledged_alerts')
    acknowledged_at = models.DateTimeField(null=True, blank=True)
    resolved_at = models.DateTimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'alerts'
        ordering = ['-created_at']

class AlertResponse(models.Model):
    RESPONSE_TYPES = [
        ('sms', 'SMS'),
        ('email', 'Email'),
        ('call', 'Voice Call'),
        ('whatsapp', 'WhatsApp'),
    ]
    
    alert = models.ForeignKey(Alert, on_delete=models.CASCADE, related_name='responses')
    response_type = models.CharField(max_length=20, choices=RESPONSE_TYPES)
    recipient = models.CharField(max_length=100)
    message = models.TextField()
    sent_at = models.DateTimeField(auto_now_add=True)
    delivered = models.BooleanField(default=False)
    delivery_time = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        db_table = 'alert_responses'

class Incident(models.Model):
    STATUS_CHOICES = [
        ('open', 'Open'),
        ('investigating', 'Investigating'),
        ('resolved', 'Resolved'),
        ('closed', 'Closed'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='incidents')
    alert = models.ForeignKey(Alert, on_delete=models.CASCADE, related_name='incidents')
    incident_number = models.CharField(max_length=50, unique=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='open')
    assigned_to = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True, related_name='assigned_incidents')
    notes = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    resolved_at = models.DateTimeField(null=True, blank=True)
    
    class Meta:
        db_table = 'incidents'
        ordering = ['-created_at']

class AudioRecording(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='recordings')
    alert = models.ForeignKey(Alert, on_delete=models.CASCADE, related_name='recordings', null=True, blank=True)
    title = models.CharField(max_length=200)
    audio_file = models.FileField(upload_to='recordings/')
    duration = models.DurationField(null=True, blank=True)
    file_size = models.IntegerField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'audio_recordings'
        ordering = ['-created_at']