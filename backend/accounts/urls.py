from django.urls import path
from .views import UserRegisterView,MyTokenObtainPairView,LogoutView,CheckAuthAPIView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns=[

    path('register/',UserRegisterView.as_view(),name='register'),
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'), 
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('logout/',LogoutView.as_view(),name='logout'),
    path('check-auth/',CheckAuthAPIView.as_view(),name='check-auth'),


]



