from django.urls import path
from . import views

urlpatterns = [
    path('message/', views.chat_message, name='chat-message'),
    path('history/', views.ChatHistoryView.as_view(), name='chat-history'),
    path('sessions/', views.chat_sessions, name='chat-sessions'),
]