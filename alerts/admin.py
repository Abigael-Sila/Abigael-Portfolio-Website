from django.contrib import admin
from .models import Alert, AlertResponse, Incident, AudioRecording

@admin.register(Alert)
class AlertAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'device', 'alert_type', 'status', 'priority', 'created_at')
    list_filter = ('alert_type', 'status', 'priority', 'created_at')
    search_fields = ('title', 'user__email', 'device__device_id')
    ordering = ('-created_at',)
    readonly_fields = ('created_at',)

@admin.register(AlertResponse)
class AlertResponseAdmin(admin.ModelAdmin):
    list_display = ('alert', 'response_type', 'recipient', 'sent_at', 'delivered')
    list_filter = ('response_type', 'delivered', 'sent_at')
    search_fields = ('alert__title', 'recipient')
    ordering = ('-sent_at',)

@admin.register(Incident)
class IncidentAdmin(admin.ModelAdmin):
    list_display = ('incident_number', 'user', 'alert', 'status', 'assigned_to', 'created_at')
    list_filter = ('status', 'created_at')
    search_fields = ('incident_number', 'user__email', 'alert__title')
    ordering = ('-created_at',)

@admin.register(AudioRecording)
class AudioRecordingAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'alert', 'duration', 'file_size', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('title', 'user__email')
    ordering = ('-created_at',)