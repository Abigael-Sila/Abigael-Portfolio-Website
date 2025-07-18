from django.urls import path
from . import views

urlpatterns = [
    path('templates/', views.NotificationTemplateListView.as_view(), name='notification-templates'),
    path('logs/', views.NotificationLogListView.as_view(), name='notification-logs'),
    path('test/', views.test_notification, name='test-notification'),
]