from rest_framework import serializers
from .models import MentorshipRequest
from users.serializers import UserSerializer

class MentorshipRequestSerializer(serializers.ModelSerializer):
    mentor = UserSerializer(read_only=True)
    mentee = UserSerializer(read_only=True)

    class Meta:
        model = MentorshipRequest
        fields = ['id', 'mentor', 'mentee', 'message', 'accepted']
