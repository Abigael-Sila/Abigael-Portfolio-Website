from django.urls import path
from . import views

urlpatterns = [
    path('', views.LandingPageView.as_view(), name='landing'),
    path('dashboard/', views.DashboardView.as_view(), name='dashboard'),
    path('api/contact/', views.contact_submission, name='contact-submission'),
    path('api/newsletter/', views.newsletter_subscription, name='newsletter-subscription'),
    path('health/', views.HealthCheckView.as_view(), name='health-check'),
]