from django.test import TestCase
from django.contrib.auth import get_user_model
from unittest.mock import patch, MagicMock
from notifications.services import InfobipService
from alerts.tasks import send_emergency_notifications
from alerts.models import Alert
from devices.models import Device
from accounts.models import Guardian

User = get_user_model()

class NotificationServiceTest(TestCase):
    def setUp(self):
        self.service = InfobipService()
        
    @patch('notifications.services.requests.post')
    def test_send_sms_success(self, mock_post):
        """Test successful SMS sending"""
        mock_response = MagicMock()
        mock_response.json.return_value = {'messages': [{'status': {'name': 'PENDING_ACCEPTED'}}]}
        mock_response.raise_for_status.return_value = None
        mock_post.return_value = mock_response
        
        result = self.service.send_sms('+1234567890', 'Test message')
        
        self.assertTrue(result['success'])
        mock_post.assert_called_once()
        
    @patch('notifications.services.requests.post')
    def test_send_sms_failure(self, mock_post):
        """Test SMS sending failure"""
        mock_post.side_effect = Exception('Network error')
        
        result = self.service.send_sms('+1234567890', 'Test message')
        
        self.assertFalse(result['success'])
        self.assertIn('error', result)

class EmergencyNotificationTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            password='testpass123'
        )
        self.device = Device.objects.create(
            user=self.user,
            device_id='TEST001',
            device_name='Test Device'
        )
        self.guardian = Guardian.objects.create(
            user=self.user,
            name='John Doe',
            email='john@example.com',
            phone='+1234567890',
            relationship='Brother'
        )
        self.alert = Alert.objects.create(
            user=self.user,
            device=self.device,
            alert_type='sos',
            title='Test Emergency',
            latitude='40.7128',
            longitude='-74.0060'
        )
        
    @patch('alerts.tasks.InfobipService')
    def test_send_emergency_notifications(self, mock_service):
        """Test emergency notification task"""
        mock_service_instance = MagicMock()
        mock_service_instance.send_sms.return_value = {'success': True}
        mock_service_instance.send_email.return_value = {'success': True}
        mock_service.return_value = mock_service_instance
        
        result = send_emergency_notifications(self.alert.id)
        
        self.assertIn('Notifications sent', result)
        mock_service_instance.send_sms.assert_called()
        mock_service_instance.send_email.assert_called()