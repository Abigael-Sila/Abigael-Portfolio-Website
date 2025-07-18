from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import NotificationTemplate, NotificationLog
from .serializers import NotificationTemplateSerializer, NotificationLogSerializer
from .services import InfobipService

class NotificationTemplateListView(generics.ListAPIView):
    serializer_class = NotificationTemplateSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return NotificationTemplate.objects.filter(is_active=True)

class NotificationLogListView(generics.ListAPIView):
    serializer_class = NotificationLogSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return NotificationLog.objects.filter(user=self.request.user)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def test_notification(request):
    """Test notification functionality"""
    notification_type = request.data.get('type')
    recipient = request.data.get('recipient')
    message = request.data.get('message', 'Test message from Symphion')
    
    if not notification_type or not recipient:
        return Response({'error': 'Type and recipient are required'}, status=status.HTTP_400_BAD_REQUEST)
    
    infobip_service = InfobipService()
    
    if notification_type == 'sms':
        result = infobip_service.send_sms(recipient, message)
    elif notification_type == 'email':
        result = infobip_service.send_email(recipient, 'Test Email', message)
    elif notification_type == 'whatsapp':
        result = infobip_service.send_whatsapp(recipient, message)
    elif notification_type == 'voice':
        result = infobip_service.make_voice_call(recipient, message)
    else:
        return Response({'error': 'Invalid notification type'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Log the notification
    NotificationLog.objects.create(
        user=request.user,
        notification_type=notification_type,
        recipient=recipient,
        message=message,
        status='sent' if result['success'] else 'failed',
        error_message=result.get('error', '')
    )
    
    return Response(result)