from django.shortcuts import render
from django.views.generic import TemplateView
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import ContactSubmission, NewsletterSubscription
from .serializers import ContactSubmissionSerializer, NewsletterSubscriptionSerializer

class LandingPageView(TemplateView):
    template_name = 'core/landing.html'

class DashboardView(TemplateView):
    template_name = 'core/dashboard.html'

@api_view(['POST'])
@permission_classes([AllowAny])
def contact_submission(request):
    """Handle contact form submissions"""
    serializer = ContactSubmissionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Thank you for your submission!'})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def newsletter_subscription(request):
    """Handle newsletter subscriptions"""
    serializer = NewsletterSubscriptionSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Successfully subscribed to newsletter!'})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class HealthCheckView(TemplateView):
    template_name = 'core/health.html'
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['status'] = 'healthy'
        return context