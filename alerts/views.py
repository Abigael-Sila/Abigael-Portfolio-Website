from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.utils import timezone
from devices.models import Device
from .models import Alert, AlertResponse, Incident, AudioRecording
from .serializers import (
    AlertSerializer, AlertResponseSerializer, IncidentSerializer,
    AudioRecordingSerializer, EmergencyTriggerSerializer
)
from .tasks import send_emergency_notifications

class AlertListView(generics.ListAPIView):
    serializer_class = AlertSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Alert.objects.filter(user=self.request.user)

class AlertDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = AlertSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Alert.objects.filter(user=self.request.user)

class IncidentListView(generics.ListAPIView):
    serializer_class = IncidentSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Incident.objects.filter(user=self.request.user)

class AudioRecordingListView(generics.ListCreateAPIView):
    serializer_class = AudioRecordingSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return AudioRecording.objects.filter(user=self.request.user)
    
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

@api_view(['POST'])
@permission_classes([AllowAny])  # Should be secured with device authentication
def emergency_trigger(request):
    """API endpoint for ESP32 + A9G modules to trigger emergency alerts"""
    serializer = EmergencyTriggerSerializer(data=request.data)
    if serializer.is_valid():
        device_id = serializer.validated_data['device_id']
        try:
            device = Device.objects.get(device_id=device_id)
            
            # Create alert
            alert = Alert.objects.create(
                user=device.user,
                device=device,
                alert_type=serializer.validated_data['alert_type'],
                title=f"{serializer.validated_data['alert_type'].title()} Alert",
                description=serializer.validated_data.get('description', ''),
                latitude=serializer.validated_data.get('latitude'),
                longitude=serializer.validated_data.get('longitude'),
                priority='critical' if serializer.validated_data['alert_type'] in ['sos', 'medical', 'panic'] else 'high'
            )
            
            # Create incident
            incident_number = f"INC-{timezone.now().strftime('%Y%m%d%H%M%S')}"
            Incident.objects.create(
                user=device.user,
                alert=alert,
                incident_number=incident_number
            )
            
            # Send notifications asynchronously
            send_emergency_notifications.delay(alert.id)
            
            return Response({
                'message': 'Emergency alert created successfully',
                'alert_id': alert.id,
                'incident_number': incident_number
            })
        except Device.DoesNotExist:
            return Response({'error': 'Device not found'}, status=status.HTTP_404_NOT_FOUND)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def acknowledge_alert(request, alert_id):
    """Acknowledge an alert"""
    alert = get_object_or_404(Alert, id=alert_id, user=request.user)
    alert.status = 'acknowledged'
    alert.acknowledged_by = request.user
    alert.acknowledged_at = timezone.now()
    alert.save()
    
    return Response({'message': 'Alert acknowledged successfully'})

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def resolve_alert(request, alert_id):
    """Resolve an alert"""
    alert = get_object_or_404(Alert, id=alert_id, user=request.user)
    alert.status = 'resolved'
    alert.resolved_at = timezone.now()
    alert.save()
    
    return Response({'message': 'Alert resolved successfully'})