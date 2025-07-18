from rest_framework import serializers
from .models import ContactSubmission, NewsletterSubscription

class ContactSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactSubmission
        fields = ('name', 'email', 'phone', 'submission_type', 'message')

class NewsletterSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscription
        fields = ('email',)