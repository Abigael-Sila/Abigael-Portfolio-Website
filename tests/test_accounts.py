from django.test import TestCase
from django.contrib.auth import get_user_model
from django.urls import reverse
from rest_framework.test import APIClient
from rest_framework import status
from accounts.models import Guardian, UserPreferences

User = get_user_model()

class UserRegistrationTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.register_url = reverse('register')
        
    def test_user_registration(self):
        """Test user registration with valid data"""
        data = {
            'email': 'test@example.com',
            'username': 'testuser',
            'password': 'testpass123',
            'password_confirm': 'testpass123',
            'phone': '+1234567890'
        }
        
        response = self.client.post(self.register_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(email='test@example.com').exists())
        self.assertTrue(UserPreferences.objects.filter(user__email='test@example.com').exists())
        
    def test_user_registration_password_mismatch(self):
        """Test user registration with mismatched passwords"""
        data = {
            'email': 'test@example.com',
            'username': 'testuser',
            'password': 'testpass123',
            'password_confirm': 'differentpass',
            'phone': '+1234567890'
        }
        
        response = self.client.post(self.register_url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertFalse(User.objects.filter(email='test@example.com').exists())

class UserLoginTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.login_url = reverse('login')
        self.user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            password='testpass123'
        )
        
    def test_user_login(self):
        """Test user login with valid credentials"""
        data = {
            'email': 'test@example.com',
            'password': 'testpass123'
        }
        
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('token', response.data)
        
    def test_user_login_invalid_credentials(self):
        """Test user login with invalid credentials"""
        data = {
            'email': 'test@example.com',
            'password': 'wrongpassword'
        }
        
        response = self.client.post(self.login_url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

class GuardianTest(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(
            email='test@example.com',
            username='testuser',
            password='testpass123'
        )
        self.client.force_authenticate(user=self.user)
        self.guardians_url = reverse('guardians')
        
    def test_create_guardian(self):
        """Test creating a guardian"""
        data = {
            'name': 'John Doe',
            'email': 'john@example.com',
            'phone': '+1234567890',
            'relationship': 'Brother',
            'is_primary': True
        }
        
        response = self.client.post(self.guardians_url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(Guardian.objects.filter(user=self.user, email='john@example.com').exists())
        
    def test_list_guardians(self):
        """Test listing user's guardians"""
        Guardian.objects.create(
            user=self.user,
            name='Jane Doe',
            email='jane@example.com',
            phone='+1234567890',
            relationship='Sister'
        )
        
        response = self.client.get(self.guardians_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['name'], 'Jane Doe')