from django.db import models

from django.contrib.auth.models import User
from django.conf import settings

User = settings.AUTH_USER_MODEL
user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)



class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Interest(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    skills = models.ManyToManyField(Skill, blank=True)
    interests = models.ManyToManyField(Interest, blank=True)
    experience = models.TextField(blank=True)

    def __str__(self):
        return f"{self.user.username}'s profile"
