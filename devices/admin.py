from django.contrib import admin
from .models import Device, DeviceLocation, DeviceConfiguration

@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = ('device_id', 'device_name', 'user', 'status', 'battery_level', 'last_seen')
    list_filter = ('status', 'created_at')
    search_fields = ('device_id', 'device_name', 'user__email')
    ordering = ('-created_at',)

@admin.register(DeviceLocation)
class DeviceLocationAdmin(admin.ModelAdmin):
    list_display = ('device', 'latitude', 'longitude', 'accuracy', 'timestamp')
    list_filter = ('timestamp',)
    search_fields = ('device__device_id', 'device__user__email')
    ordering = ('-timestamp',)

@admin.register(DeviceConfiguration)
class DeviceConfigurationAdmin(admin.ModelAdmin):
    list_display = ('device', 'sos_button_enabled', 'fall_detection_enabled', 
                   'location_update_interval', 'auto_call_enabled')
    search_fields = ('device__device_id', 'device__user__email')