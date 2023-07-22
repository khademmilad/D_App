from rest_framework import serializers
from .models import Account


class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        max_length=128,
        min_length=8,
        write_only=True
    )

    class Meta:
        model = Account
        fields = ['email', 'username', 'password']


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=60)
    password = serializers.CharField(max_length=128, write_only=True)