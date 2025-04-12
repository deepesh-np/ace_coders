from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    is_mentor = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    is_professional = models.BooleanField(default=False)

    def _str_(self):
        return self.username
    