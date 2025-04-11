from django.db import models
from users.models import User

class MentorshipRequest(models.Model):
    mentor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mentorships_given')
    mentee = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mentorships_requested')
    message = models.TextField()
    accepted = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.mentee} -> {self.mentor}"
