from rest_framework import serializers
from .models import Alert, AlertResponse, Incident, AudioRecording

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = ('id', 'device', 'alert_type', 'status', 'priority', 'title', 
                 'description', 'latitude', 'longitude', 'acknowledged_by', 
                 'acknowledged_at', 'resolved_at', 'created_at')
        read_only_fields = ('id', 'created_at', 'acknowledged_by', 'acknowledged_at', 'resolved_at')

class AlertResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = AlertResponse
        fields = ('id', 'alert', 'response_type', 'recipient', 'message', 
                 'sent_at', 'delivered', 'delivery_time')
        read_only_fields = ('id', 'sent_at', 'delivered', 'delivery_time')

class IncidentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Incident
        fields = ('id', 'user', 'alert', 'incident_number', 'status', 
                 'assigned_to', 'notes', 'created_at', 'resolved_at')
        read_only_fields = ('id', 'incident_number', 'created_at', 'resolved_at')

class AudioRecordingSerializer(serializers.ModelSerializer):
    class Meta:
        model = AudioRecording
        fields = ('id', 'alert', 'title', 'audio_file', 'duration', 
                 'file_size', 'created_at')
        read_only_fields = ('id', 'created_at')

class EmergencyTriggerSerializer(serializers.Serializer):
    device_id = serializers.CharField()
    alert_type = serializers.ChoiceField(choices=Alert.ALERT_TYPES)
    latitude = serializers.DecimalField(max_digits=9, decimal_places=6, required=False)
    longitude = serializers.DecimalField(max_digits=9, decimal_places=6, required=False)
    description = serializers.CharField(required=False)