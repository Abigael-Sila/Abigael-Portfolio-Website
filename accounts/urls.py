from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.RegisterView.as_view(), name='register'),
    path('login/', views.LoginView.as_view(), name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('profile/', views.ProfileView.as_view(), name='profile'),
    path('guardians/', views.GuardianListCreateView.as_view(), name='guardians'),
    path('guardians/<int:pk>/', views.GuardianDetailView.as_view(), name='guardian-detail'),
    path('preferences/', views.UserPreferencesView.as_view(), name='preferences'),
]