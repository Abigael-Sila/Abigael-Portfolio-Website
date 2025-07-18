from celery import shared_task
from django.utils import timezone
from .models import Alert, AlertResponse
from accounts.models import Guardian
from notifications.services import InfobipService

@shared_task
def send_emergency_notifications(alert_id):
    """Send emergency notifications to guardians"""
    try:
        alert = Alert.objects.get(id=alert_id)
        guardians = Guardian.objects.filter(user=alert.user)
        infobip_service = InfobipService()
        
        for guardian in guardians:
            # Send SMS
            if alert.user.preferences.sms_notifications:
                message = f"EMERGENCY ALERT: {alert.title} from {alert.user.first_name or alert.user.username}. Location: {alert.latitude}, {alert.longitude} if available."
                sms_response = infobip_service.send_sms(guardian.phone, message)
                
                AlertResponse.objects.create(
                    alert=alert,
                    response_type='sms',
                    recipient=guardian.phone,
                    message=message,
                    delivered=sms_response.get('success', False)
                )
            
            # Send Email
            if alert.user.preferences.email_notifications:
                email_subject = f"Emergency Alert - {alert.title}"
                email_body = f"""
                Emergency Alert Details:
                
                User: {alert.user.first_name or alert.user.username}
                Alert Type: {alert.get_alert_type_display()}
                Time: {alert.created_at}
                Description: {alert.description}
                
                Please respond immediately.
                """
                
                email_response = infobip_service.send_email(guardian.email, email_subject, email_body)
                
                AlertResponse.objects.create(
                    alert=alert,
                    response_type='email',
                    recipient=guardian.email,
                    message=email_body,
                    delivered=email_response.get('success', False)
                )
            
            # Send WhatsApp (if enabled)
            if alert.user.preferences.whatsapp_notifications:
                whatsapp_message = f"🚨 EMERGENCY ALERT 🚨\n\n{alert.title}\n\nUser: {alert.user.first_name or alert.user.username}\nTime: {alert.created_at}\n\nPlease respond immediately."
                whatsapp_response = infobip_service.send_whatsapp(guardian.phone, whatsapp_message)
                
                AlertResponse.objects.create(
                    alert=alert,
                    response_type='whatsapp',
                    recipient=guardian.phone,
                    message=whatsapp_message,
                    delivered=whatsapp_response.get('success', False)
                )
        
        return f"Notifications sent for alert {alert_id}"
    
    except Alert.DoesNotExist:
        return f"Alert {alert_id} not found"
    except Exception as e:
        return f"Error sending notifications: {str(e)}"