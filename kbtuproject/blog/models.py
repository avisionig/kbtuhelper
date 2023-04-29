from django.db import models

from users.models import User


# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    content = models.TextField()
    likes = models.IntegerField(default=0)
