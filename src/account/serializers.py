from rest_framework import serializers
from .models import Account
from rest_framework_simplejwt.tokens import RefreshToken
from friend.models import FriendRequest


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

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Perform your custom authentication logic here, e.g., check if the email and password are valid
        try:
            user = Account.objects.get(email=email)
        except Account.DoesNotExist:
            raise serializers.ValidationError('Invalid email.')

        if not user.check_password(password):
            raise serializers.ValidationError('Invalid password.')

        # If the authentication is successful, return the user object
        return user
    

# Return users who did not send a friend request
class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = ['username', 'profile_image']
