from rest_framework import serializers
from .models import Device, DeviceLocation, DeviceConfiguration

class DeviceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Device
        fields = ('id', 'device_id', 'device_name', 'status', 'battery_level', 
                 'last_seen', 'firmware_version', 'created_at')
        read_only_fields = ('id', 'created_at', 'last_seen')

class DeviceLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceLocation
        fields = ('id', 'device', 'latitude', 'longitude', 'accuracy', 
                 'altitude', 'speed', 'timestamp')
        read_only_fields = ('id', 'timestamp')

class DeviceConfigurationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeviceConfiguration
        fields = ('sos_button_enabled', 'fall_detection_enabled', 
                 'location_update_interval', 'emergency_contacts_limit', 'auto_call_enabled')

class DeviceStatusUpdateSerializer(serializers.Serializer):
    device_id = serializers.CharField()
    battery_level = serializers.IntegerField(min_value=0, max_value=100)
    status = serializers.ChoiceField(choices=Device.STATUS_CHOICES)
    latitude = serializers.DecimalField(max_digits=9, decimal_places=6, required=False)
    longitude = serializers.DecimalField(max_digits=9, decimal_places=6, required=False)
    accuracy = serializers.FloatField(required=False)