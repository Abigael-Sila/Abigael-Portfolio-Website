from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from alerts.models import Alert, Incident
from devices.models import Device

User = get_user_model()

class AlertTest(TestCase):
    def setUp(self):
        self.client = APIClient()
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
        self.client.force_authenticate(user=self.user)
        
    def test_emergency_trigger(self):
        """Test emergency trigger API"""
        trigger_url = reverse('emergency-trigger')
        data = {
            'device_id': 'TEST001',
            'alert_type': 'sos',
            'latitude': '40.7128',
            'longitude': '-74.0060',
            'description': 'Test emergency'
        }
        
        response = self.client.post(trigger_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertTrue(Alert.objects.filter(device=self.device, alert_type='sos').exists())
        self.assertTrue(Incident.objects.filter(user=self.user).exists())
        
    def test_acknowledge_alert(self):
        """Test acknowledging an alert"""
        alert = Alert.objects.create(
            user=self.user,
            device=self.device,
            alert_type='sos',
            title='Test Alert',
            status='active'
        )
        
        acknowledge_url = reverse('acknowledge-alert', kwargs={'alert_id': alert.id})
        response = self.client.post(acknowledge_url)
        
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        alert.refresh_from_db()
        self.assertEqual(alert.status, 'acknowledged')
        self.assertEqual(alert.acknowledged_by, self.user)

class DeviceTest(TestCase):
    def setUp(self):
        self.client = APIClient()
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
        
    def test_device_status_update(self):
        """Test device status update API"""
        status_url = reverse('device-status-update')
        data = {
            'device_id': 'TEST001',
            'battery_level': 75,
            'status': 'active',
            'latitude': '40.7128',
            'longitude': '-74.0060'
        }
        
        response = self.client.post(status_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        
        self.device.refresh_from_db()
        self.assertEqual(self.device.battery_level, 75)
        self.assertEqual(self.device.status, 'active')
        self.assertTrue(self.device.locations.exists())