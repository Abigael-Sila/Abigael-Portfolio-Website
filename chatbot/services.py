import openai
from django.conf import settings
import logging

logger = logging.getLogger(__name__)

class ChatbotService:
    def __init__(self):
        openai.api_key = settings.OPENAI_API_KEY
        self.system_message = """
        You are Symphbot, an AI assistant for the Symphion emergency alert system. 
        You help users with:
        - Understanding how to use their emergency device
        - Setting up emergency contacts
        - Troubleshooting device issues
        - Providing safety tips
        - Explaining app features
        
        Always be helpful, empathetic, and focused on user safety.
        """
    
    def get_response(self, user_message, chat_history=None):
        """Get AI response using OpenAI API"""
        try:
            messages = [{"role": "system", "content": self.system_message}]
            
            # Add chat history if provided
            if chat_history:
                for msg in chat_history:
                    role = "user" if msg.message_type == "user" else "assistant"
                    messages.append({"role": role, "content": msg.content})
            
            # Add current user message
            messages.append({"role": "user", "content": user_message})
            
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=messages,
                max_tokens=500,
                temperature=0.7
            )
            
            return response.choices[0].message.content
            
        except Exception as e:
            logger.error(f"ChatGPT API error: {e}")
            return "I'm sorry, I'm having trouble connecting right now. Please try again later or contact support for assistance."
    
    def get_emergency_response(self, emergency_type):
        """Get specific emergency response"""
        emergency_responses = {
            'medical': "🚨 If this is a medical emergency, call 911 immediately. If you're using your Symphion device, press the SOS button. The device will automatically alert your emergency contacts and share your location.",
            'fire': "🔥 If there's a fire, call 911 immediately and evacuate safely. Your Symphion device can help alert your contacts of your location and situation.",
            'accident': "🚗 If you're in an accident, prioritize your safety first. If you can, activate your Symphion device to alert your emergency contacts. Call 911 if anyone is injured.",
            'lost': "📍 If you're lost, stay calm. Your Symphion device is tracking your location. Press the SOS button to alert your emergency contacts. They can see your location and help guide you.",
        }
        
        return emergency_responses.get(emergency_type, "For any emergency, press your Symphion SOS button or call 911. Your device will automatically alert your emergency contacts.")