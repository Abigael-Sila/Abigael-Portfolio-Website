from django.contrib import admin
from .models import ChatSession, ChatMessage

@admin.register(ChatSession)
class ChatSessionAdmin(admin.ModelAdmin):
    list_display = ('session_id', 'user', 'created_at')
    list_filter = ('created_at',)
    search_fields = ('session_id', 'user__email')
    readonly_fields = ('session_id', 'created_at')

@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('session', 'message_type', 'content', 'timestamp')
    list_filter = ('message_type', 'timestamp')
    search_fields = ('session__session_id', 'content')
    readonly_fields = ('timestamp',)