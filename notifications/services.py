import requests
from django.conf import settings
from django.core.mail import send_mail
import logging

logger = logging.getLogger(__name__)

class InfobipService:
    def __init__(self):
        self.api_key = settings.INFOBIP_API_KEY
        self.base_url = settings.INFOBIP_BASE_URL
        self.headers = {
            'Authorization': f'App {self.api_key}',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    
    def send_sms(self, phone_number, message):
        """Send SMS using Infobip API"""
        url = f"{self.base_url}/sms/2/text/advanced"
        
        payload = {
            "messages": [
                {
                    "destinations": [{"to": phone_number}],
                    "from": "Symphion",
                    "text": message
                }
            ]
        }
        
        try:
            response = requests.post(url, json=payload, headers=self.headers)
            response.raise_for_status()
            return {"success": True, "response": response.json()}
        except requests.exceptions.RequestException as e:
            logger.error(f"SMS sending failed: {e}")
            return {"success": False, "error": str(e)}
    
    def send_whatsapp(self, phone_number, message):
        """Send WhatsApp message using Infobip API"""
        url = f"{self.base_url}/whatsapp/1/message/text"
        
        payload = {
            "from": "441134960000",  # Your WhatsApp sender number
            "to": phone_number,
            "content": {
                "text": message
            }
        }
        
        try:
            response = requests.post(url, json=payload, headers=self.headers)
            response.raise_for_status()
            return {"success": True, "response": response.json()}
        except requests.exceptions.RequestException as e:
            logger.error(f"WhatsApp sending failed: {e}")
            return {"success": False, "error": str(e)}
    
    def send_email(self, email, subject, body):
        """Send email using Infobip API"""
        url = f"{self.base_url}/email/3/send"
        
        payload = {
            "from": "noreply@symphion.com",
            "to": [{"email": email}],
            "subject": subject,
            "text": body
        }
        
        try:
            response = requests.post(url, json=payload, headers=self.headers)
            response.raise_for_status()
            return {"success": True, "response": response.json()}
        except requests.exceptions.RequestException as e:
            logger.error(f"Email sending failed: {e}")
            # Fallback to Django email
            try:
                send_mail(subject, body, settings.DEFAULT_FROM_EMAIL, [email])
                return {"success": True, "fallback": True}
            except Exception as fallback_error:
                logger.error(f"Fallback email failed: {fallback_error}")
                return {"success": False, "error": str(e)}
    
    def make_voice_call(self, phone_number, message):
        """Make voice call using Infobip API"""
        url = f"{self.base_url}/tts/3/send"
        
        payload = {
            "messages": [
                {
                    "destinations": [{"to": phone_number}],
                    "from": "Symphion",
                    "text": message,
                    "language": "en",
                    "voice": {
                        "name": "Joanna",
                        "gender": "female"
                    }
                }
            ]
        }
        
        try:
            response = requests.post(url, json=payload, headers=self.headers)
            response.raise_for_status()
            return {"success": True, "response": response.json()}
        except requests.exceptions.RequestException as e:
            logger.error(f"Voice call failed: {e}")
            return {"success": False, "error": str(e)}