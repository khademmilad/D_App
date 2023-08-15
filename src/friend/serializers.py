from rest_framework import serializers


class SendFriendRequestSerializer(serializers.Serializer):
    receiver_user_id = serializers.IntegerField()

