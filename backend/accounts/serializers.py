from rest_framework import serializers
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from .models import CustomUser

class UserRegisterSerializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True,required=True,validators=[validate_password])
    class Meta:
        model=CustomUser
        fields=['username','email','password']

    def validate_username(self,value):
        if CustomUser.objects.filter(username=value).exists():
            raise ValidationError("Usename already exists.")
        



    def create(self,validated_data):
        user=CustomUser.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password'],
        )
        return user
    
class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model=CustomUser
        fields=['username','email']

        