from django.db import models
from django.contrib.auth.models import AbstractUser
from info.models import Organization

from .managers import UserManager


class User(AbstractUser):
    email = models.EmailField(unique=True)
    organization = models.ForeignKey(Organization, on_delete=models.SET_NULL, blank=True,  null=True)
    faculty = models.TextField(blank=True,  null=True)
    phone_number = models.CharField(max_length=20, blank=True, unique=True,  null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return self.first_name + " " + self.last_name