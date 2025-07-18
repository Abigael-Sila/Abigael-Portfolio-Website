from rest_framework import serializers
from .models import NotificationTemplate, NotificationLog

class NotificationTemplateSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotificationTemplate
        fields = ('id', 'name', 'template_type', 'subject', 'content', 'is_active', 'created_at')
        read_only_fields = ('id', 'created_at')

class NotificationLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = NotificationLog
        fields = ('id', 'notification_type', 'recipient', 'message', 'status', 
                 'sent_at', 'delivered_at', 'error_message')
        read_only_fields = ('id', 'sent_at', 'delivered_at')