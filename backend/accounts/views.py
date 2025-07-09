from django.shortcuts import render
from rest_framework.generics import CreateAPIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import CustomUser
from .serializers import UserRegisterSerializer


# Create your views here.

class UserRegisterView(CreateAPIView):
    queryset=CustomUser.objects.all()
    serializer_class=UserRegisterSerializer
    



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['email'] =user.email
        # ...

        return token
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class=MyTokenObtainPairSerializer
    
    def post(self,request,*args,**kwargs):
        print("mytokenobtainpairview is called")
        serializer=self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
        except Exception as e:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
        access_token=serializer.validated_data.get('access')
        refresh_token = serializer.validated_data.get("refresh")
        print(access_token,refresh_token)

        response = Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        response.set_cookie(
            key='access_token',
            value=access_token,
            httponly=True,
            secure=False,
            samesite='Lax',
            max_age=1800
        )
        response.set_cookie(
            key='refresh_token',
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite='Lax',
            max_age=30 * 24 * 3600
        )
        print(response)
        return response
    
class LogoutView(APIView):

    def post(self,request):
        response = Response({"message": "Logged out successfully"}, status=status.HTTP_200_OK)
        response.delete_cookie('access_token')
        response.delete_cookie('refresh_token')

        return response

class CheckAuthAPIView(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request):
        return Response({"authenticated": True, "user": request.user.username})