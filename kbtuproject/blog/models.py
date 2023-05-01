from django.db import models

from users.models import User


# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='author')
    content = models.TextField()
    likes = models.ManyToManyField(User, blank=True, related_name='liker')

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __str__(self):
        return self.author.__str__() + " " + self.content
