from django.urls import path
from . import views

urlpatterns = [
    path('', views.AlertListView.as_view(), name='alert-list'),
    path('<int:pk>/', views.AlertDetailView.as_view(), name='alert-detail'),
    path('<int:alert_id>/acknowledge/', views.acknowledge_alert, name='acknowledge-alert'),
    path('<int:alert_id>/resolve/', views.resolve_alert, name='resolve-alert'),
    path('incidents/', views.IncidentListView.as_view(), name='incident-list'),
    path('recordings/', views.AudioRecordingListView.as_view(), name='recording-list'),
    path('trigger/', views.emergency_trigger, name='emergency-trigger'),
]