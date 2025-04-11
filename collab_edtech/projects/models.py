from django.db import models
from users.models import User

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_projects')
    technologies = models.ManyToManyField('profiles.Skill')
    goals = models.TextField()
    is_open = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Team(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='teams')
    members = models.ManyToManyField(User)
