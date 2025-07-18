from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class Device(models.Model):
    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
        ('maintenance', 'Maintenance'),
        ('lost', 'Lost'),
    ]
    
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='devices')
    device_id = models.CharField(max_length=50, unique=True)
    device_name = models.CharField(max_length=100)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='active')
    battery_level = models.IntegerField(default=100)
    last_seen = models.DateTimeField(auto_now=True)
    firmware_version = models.CharField(max_length=20, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'devices'

class DeviceLocation(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name='locations')
    latitude = models.DecimalField(max_digits=9, decimal_places=6)
    longitude = models.DecimalField(max_digits=9, decimal_places=6)
    accuracy = models.FloatField(default=0.0)
    altitude = models.FloatField(null=True, blank=True)
    speed = models.FloatField(null=True, blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'device_locations'
        ordering = ['-timestamp']

class DeviceConfiguration(models.Model):
    device = models.OneToOneField(Device, on_delete=models.CASCADE, related_name='configuration')
    sos_button_enabled = models.BooleanField(default=True)
    fall_detection_enabled = models.BooleanField(default=True)
    location_update_interval = models.IntegerField(default=300)  # seconds
    emergency_contacts_limit = models.IntegerField(default=5)
    auto_call_enabled = models.BooleanField(default=True)
    
    class Meta:
        db_table = 'device_configurations'