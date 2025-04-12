from rest_framework import serializers
from .models import Project, Team
from users.serializers import UserSerializer
from profiles.serializers import SkillSerializer
from profiles.models import Skill

class ProjectSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    technologies = SkillSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'created_by', 'technologies', 'goals', 'is_open']

class TeamSerializer(serializers.ModelSerializer):
    members = UserSerializer(many=True, read_only=True)
    
    class Meta:
        model = Team
        fields = ['project', 'members']
