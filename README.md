# Symphion Web App Backend

A comprehensive Django backend for the Symphion emergency alert system, providing real-time communication, device monitoring, and emergency response capabilities.

## Features

### Core Functionality
- **User Authentication**: Complete user registration, login, and profile management
- **Device Management**: ESP32 + A9G module integration with real-time status updates
- **Emergency Alerts**: SOS triggers, fall detection, and automated response system
- **Real-time Communication**: WebSocket integration for live updates
- **Notification System**: Multi-channel notifications (SMS, Email, WhatsApp, Voice)
- **Guardian Management**: Trusted circle configuration and management

### Advanced Features
- **Admin Console**: Comprehensive incident management and user oversight
- **Shop Integration**: Product catalog with Stripe payment processing
- **AI Chatbot**: OpenAI-powered assistance for users
- **Audio Recordings**: Voice memo storage and playback
- **Location Tracking**: Real-time GPS monitoring and history
- **Join Us Platform**: Investor, volunteer, and rescue team onboarding

## Technology Stack

- **Backend**: Django 4.2, Django REST Framework
- **Database**: PostgreSQL
- **Real-time**: Django Channels, WebSockets
- **Message Broker**: Redis
- **Task Queue**: Celery
- **External APIs**: Infobip, Stripe, OpenAI
- **Deployment**: Docker, Gunicorn

## Installation

### Prerequisites
- Python 3.11+
- PostgreSQL 13+
- Redis 6+

## Quick Start

1. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration if needed
   ```

2. **Build and Start Services**
   ```bash
   docker-compose up --build
   ```

3. **Create Superuser (in a new terminal)**
   ```bash
   docker-compose exec web python manage.py createsuperuser
   ```

### Setup
1. Clone the repository
2. Install dependencies: `pip install -r requirements.txt`
3. Copy `.env.example` to `.env` and configure your settings
4. Run migrations: `python manage.py migrate`
5. Create superuser: `python manage.py createsuperuser`
6. Start development server: `python manage.py runserver`

**Note**: In WebContainer environments, virtual environments may not be necessary as the container provides isolation.

### Docker Setup
```bash
docker-compose up -d
```

## API Endpoints

### Authentication
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/logout/` - User logout
- `GET /api/auth/profile/` - Get user profile
- `PUT /api/auth/profile/` - Update user profile

### Device Management
- `GET /api/devices/` - List user devices
- `GET /api/devices/{id}/` - Get device details
- `POST /api/devices/status-update/` - Update device status (ESP32 endpoint)
- `GET /api/devices/{id}/current-location/` - Get device location

### Emergency Alerts
- `GET /api/alerts/` - List user alerts
- `POST /api/alerts/trigger/` - Trigger emergency alert (ESP32 endpoint)
- `POST /api/alerts/{id}/acknowledge/` - Acknowledge alert
- `POST /api/alerts/{id}/resolve/` - Resolve alert

### Notifications
- `GET /api/notifications/logs/` - Notification history
- `POST /api/notifications/test/` - Test notification

### Shop
- `GET /api/shop/products/` - List products
- `GET /api/shop/products/{slug}/` - Product details
- `POST /api/shop/orders/create/` - Create order
- `GET /api/shop/orders/` - List user orders

### Chatbot
- `POST /api/chatbot/message/` - Send message to chatbot
- `GET /api/chatbot/history/` - Get chat history
- `GET /api/chatbot/sessions/` - List chat sessions

## WebSocket Endpoints

- `ws://localhost:8000/ws/alerts/` - Real-time alert updates

## Environment Variables

See `.env.example` for all required environment variables.

## Testing

Run tests with:
```bash
python manage.py test
```

## Deployment

### Production Settings
1. Set `DEBUG=False`
2. Configure proper database credentials
3. Set up proper email backend
4. Configure Redis and Celery
5. Set up proper static file serving

### Docker Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## API Integration Examples

### ESP32 Device Status Update
```python
import requests

data = {
    'device_id': 'ESP32_001',
    'battery_level': 85,
    'status': 'active',
    'latitude': 40.7128,
    'longitude': -74.0060
}

response = requests.post('http://localhost:8000/api/devices/status-update/', json=data)
```

### Emergency Trigger
```python
import requests

data = {
    'device_id': 'ESP32_001',
    'alert_type': 'sos',
    'latitude': 40.7128,
    'longitude': -74.0060,
    'description': 'Emergency situation'
}

response = requests.post('http://localhost:8000/api/alerts/trigger/', json=data)
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

This project is licensed under the MIT License.