from django.urls import path
from . import views

urlpatterns = [
    path('', views.DeviceListView.as_view(), name='device-list'),
    path('<int:pk>/', views.DeviceDetailView.as_view(), name='device-detail'),
    path('<int:device_id>/locations/', views.DeviceLocationListView.as_view(), name='device-locations'),
    path('<int:device_id>/configuration/', views.DeviceConfigurationView.as_view(), name='device-configuration'),
    path('<int:device_id>/current-location/', views.device_current_location, name='device-current-location'),
    path('status-update/', views.device_status_update, name='device-status-update'),
]