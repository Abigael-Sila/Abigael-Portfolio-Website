from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Guardian, UserPreferences

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    list_display = ('email', 'username', 'phone', 'location', 'is_active', 'created_at')
    list_filter = ('is_active', 'is_staff', 'created_at')
    search_fields = ('email', 'username', 'phone')
    ordering = ('-created_at',)
    
    fieldsets = UserAdmin.fieldsets + (
        ('Additional Info', {
            'fields': ('phone', 'location', 'profile_photo', 'emergency_contact_name', 'emergency_contact_phone')
        }),
    )

@admin.register(Guardian)
class GuardianAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'phone', 'user', 'relationship', 'is_primary', 'created_at')
    list_filter = ('is_primary', 'relationship', 'created_at')
    search_fields = ('name', 'email', 'phone', 'user__email')
    ordering = ('-created_at',)

@admin.register(UserPreferences)
class UserPreferencesAdmin(admin.ModelAdmin):
    list_display = ('user', 'email_notifications', 'sms_notifications', 'whatsapp_notifications', 
                   'voice_notifications', 'location_sharing')
    list_filter = ('email_notifications', 'sms_notifications', 'whatsapp_notifications')
    search_fields = ('user__email', 'user__username')