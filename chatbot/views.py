from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.utils import timezone
from .models import ChatSession, ChatMessage
from .serializers import ChatMessageSerializer
from .services import ChatbotService
import uuid

class ChatHistoryView(generics.ListAPIView):
    serializer_class = ChatMessageSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        session_id = self.request.query_params.get('session_id')
        if session_id:
            try:
                session = ChatSession.objects.get(session_id=session_id, user=self.request.user)
                return ChatMessage.objects.filter(session=session)
            except ChatSession.DoesNotExist:
                return ChatMessage.objects.none()
        return ChatMessage.objects.none()

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def chat_message(request):
    """Process chat message and return bot response"""
    user_message = request.data.get('message')
    session_id = request.data.get('session_id')
    
    if not user_message:
        return Response({'error': 'Message is required'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Get or create chat session
    if session_id:
        try:
            session = ChatSession.objects.get(session_id=session_id, user=request.user)
        except ChatSession.DoesNotExist:
            session = ChatSession.objects.create(
                user=request.user,
                session_id=str(uuid.uuid4())
            )
    else:
        session = ChatSession.objects.create(
            user=request.user,
            session_id=str(uuid.uuid4())
        )
    
    # Save user message
    user_msg = ChatMessage.objects.create(
        session=session,
        message_type='user',
        content=user_message
    )
    
    # Get chat history for context
    chat_history = ChatMessage.objects.filter(session=session).order_by('timestamp')
    
    # Get bot response
    chatbot_service = ChatbotService()
    bot_response = chatbot_service.get_response(user_message, chat_history)
    
    # Save bot response
    bot_msg = ChatMessage.objects.create(
        session=session,
        message_type='bot',
        content=bot_response
    )
    
    return Response({
        'session_id': session.session_id,
        'user_message': ChatMessageSerializer(user_msg).data,
        'bot_response': ChatMessageSerializer(bot_msg).data
    })

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def chat_sessions(request):
    """Get user's chat sessions"""
    sessions = ChatSession.objects.filter(user=request.user).order_by('-created_at')
    
    sessions_data = []
    for session in sessions:
        last_message = session.messages.last()
        sessions_data.append({
            'session_id': session.session_id,
            'created_at': session.created_at,
            'last_message': last_message.content if last_message else None,
            'message_count': session.messages.count()
        })
    
    return Response({'sessions': sessions_data})