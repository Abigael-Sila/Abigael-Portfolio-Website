import stripe
from django.conf import settings
from django.utils import timezone
from rest_framework import generics, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from .models import Category, Product, Order, OrderItem
from .serializers import (
    CategorySerializer, ProductSerializer, OrderSerializer, CreateOrderSerializer
)

stripe.api_key = settings.STRIPE_SECRET_KEY

class CategoryListView(generics.ListAPIView):
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        return Category.objects.filter(is_active=True)

class ProductListView(generics.ListAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    
    def get_queryset(self):
        queryset = Product.objects.filter(is_active=True)
        category = self.request.query_params.get('category')
        featured = self.request.query_params.get('featured')
        
        if category:
            queryset = queryset.filter(category__slug=category)
        if featured:
            queryset = queryset.filter(featured=True)
        
        return queryset

class ProductDetailView(generics.RetrieveAPIView):
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = 'slug'
    
    def get_queryset(self):
        return Product.objects.filter(is_active=True)

class OrderListView(generics.ListAPIView):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_order(request):
    """Create a new order with Stripe payment"""
    serializer = CreateOrderSerializer(data=request.data)
    if serializer.is_valid():
        items_data = serializer.validated_data['items']
        shipping_address = serializer.validated_data['shipping_address']
        
        # Calculate total amount
        total_amount = 0
        order_items = []
        
        for item_data in items_data:
            try:
                product = Product.objects.get(id=item_data['product_id'])
                quantity = int(item_data['quantity'])
                
                if product.stock_quantity < quantity:
                    return Response({
                        'error': f'Insufficient stock for {product.name}'
                    }, status=status.HTTP_400_BAD_REQUEST)
                
                item_total = product.price * quantity
                total_amount += item_total
                
                order_items.append({
                    'product': product,
                    'quantity': quantity,
                    'price': product.price
                })
            except Product.DoesNotExist:
                return Response({
                    'error': f'Product not found: {item_data["product_id"]}'
                }, status=status.HTTP_400_BAD_REQUEST)
        
        # Create Stripe payment intent
        try:
            intent = stripe.PaymentIntent.create(
                amount=int(total_amount * 100),  # Convert to cents
                currency='usd',
                metadata={
                    'user_id': request.user.id,
                    'order_items': str(len(order_items))
                }
            )
            
            # Create order
            order_number = f"ORD-{timezone.now().strftime('%Y%m%d%H%M%S')}"
            order = Order.objects.create(
                user=request.user,
                order_number=order_number,
                total_amount=total_amount,
                shipping_address=shipping_address,
                stripe_payment_intent_id=intent.id
            )
            
            # Create order items
            for item_data in order_items:
                OrderItem.objects.create(
                    order=order,
                    product=item_data['product'],
                    quantity=item_data['quantity'],
                    price=item_data['price']
                )
            
            return Response({
                'order_id': order.id,
                'client_secret': intent.client_secret,
                'total_amount': total_amount
            })
            
        except stripe.error.StripeError as e:
            return Response({
                'error': f'Payment error: {str(e)}'
            }, status=status.HTTP_400_BAD_REQUEST)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
@permission_classes([AllowAny])
def stripe_webhook(request):
    """Handle Stripe webhook events"""
    payload = request.body
    sig_header = request.META.get('HTTP_STRIPE_SIGNATURE')
    endpoint_secret = settings.STRIPE_WEBHOOK_SECRET
    
    try:
        event = stripe.Webhook.construct_event(payload, sig_header, endpoint_secret)
    except ValueError:
        return Response({'error': 'Invalid payload'}, status=status.HTTP_400_BAD_REQUEST)
    except stripe.error.SignatureVerificationError:
        return Response({'error': 'Invalid signature'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Handle payment success
    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        
        try:
            order = Order.objects.get(stripe_payment_intent_id=payment_intent['id'])
            order.status = 'processing'
            order.save()
            
            # Update stock quantities
            for item in order.items.all():
                product = item.product
                product.stock_quantity -= item.quantity
                product.save()
                
        except Order.DoesNotExist:
            pass
    
    return Response({'status': 'success'})