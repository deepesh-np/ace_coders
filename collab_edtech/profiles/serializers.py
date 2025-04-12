from rest_framework import serializers
from .models import Profile, Skill, Interest
from users.serializers import UserSerializer

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ['id', 'name']

class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = ['id', 'name']

class ProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    skills = SkillSerializer(many=True, read_only=True)
    interests = InterestSerializer(many=True, read_only=True)

    class Meta:
        model = Profile
        fields = ['user', 'bio', 'experience', 'skills', 'interests']
