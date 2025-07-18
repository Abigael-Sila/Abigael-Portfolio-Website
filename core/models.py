from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

class ContactSubmission(models.Model):
    SUBMISSION_TYPES = [
        ('investor', 'Investor'),
        ('volunteer', 'Volunteer'),
        ('rescue_team', 'Rescue Team'),
        ('general', 'General Inquiry'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True)
    submission_type = models.CharField(max_length=20, choices=SUBMISSION_TYPES)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'contact_submissions'
        ordering = ['-created_at']

class NewsletterSubscription(models.Model):
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'newsletter_subscriptions'