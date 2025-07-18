from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('products/', views.ProductListView.as_view(), name='product-list'),
    path('products/<slug:slug>/', views.ProductDetailView.as_view(), name='product-detail'),
    path('orders/', views.OrderListView.as_view(), name='order-list'),
    path('orders/create/', views.create_order, name='create-order'),
    path('stripe/webhook/', views.stripe_webhook, name='stripe-webhook'),
]