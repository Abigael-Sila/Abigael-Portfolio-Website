from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Device, DeviceLocation, DeviceConfiguration
from .serializers import (
    DeviceSerializer, DeviceLocationSerializer, DeviceConfigurationSerializer,
    DeviceStatusUpdateSerializer
)

class DeviceListView(generics.ListAPIView):
    serializer_class = DeviceSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Device.objects.filter(user=self.request.user)

class DeviceDetailView(generics.RetrieveUpdateAPIView):
    serializer_class = DeviceSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Device.objects.filter(user=self.request.user)

class DeviceLocationListView(generics.ListAPIView):
    serializer_class = DeviceLocationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        device_id = self.kwargs.get('device_id')
        device = get_object_or_404(Device, id=device_id, user=self.request.user)
        return DeviceLocation.objects.filter(device=device)

class DeviceConfigurationView(generics.RetrieveUpdateAPIView):
    serializer_class = DeviceConfigurationSerializer
    permission_classes = [IsAuthenticated]
    
    def get_object(self):
        device_id = self.kwargs.get('device_id')
        device = get_object_or_404(Device, id=device_id, user=self.request.user)
        config, created = DeviceConfiguration.objects.get_or_create(device=device)
        return config

@api_view(['POST'])
@permission_classes([AllowAny])  # This endpoint should be secured with device authentication
def device_status_update(request):
    """API endpoint for ESP32 + A9G modules to update device status"""
    serializer = DeviceStatusUpdateSerializer(data=request.data)
    if serializer.is_valid():
        device_id = serializer.validated_data['device_id']
        try:
            device = Device.objects.get(device_id=device_id)
            
            # Update device status
            device.battery_level = serializer.validated_data['battery_level']
            device.status = serializer.validated_data['status']
            device.save()
            
            # Update location if provided
            if 'latitude' in serializer.validated_data and 'longitude' in serializer.validated_data:
                DeviceLocation.objects.create(
                    device=device,
                    latitude=serializer.validated_data['latitude'],
                    longitude=serializer.validated_data['longitude'],
                    accuracy=serializer.validated_data.get('accuracy', 0.0)
                )
            
            return Response({'message': 'Status updated successfully'})
        except Device.DoesNotExist:
            return Response({'error': 'Device not found'}, status=status.HTTP_404_NOT_FOUND)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def device_current_location(request, device_id):
    """Get current location of a device"""
    device = get_object_or_404(Device, id=device_id, user=request.user)
    latest_location = device.locations.first()
    if latest_location:
        return Response(DeviceLocationSerializer(latest_location).data)
    return Response({'error': 'No location data available'}, status=status.HTTP_404_NOT_FOUND)