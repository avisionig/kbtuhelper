from django.db import models

from users.models import User


# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=255, null=True, blank=True, default="")

    def __str__(self):
        return self.name.__str__()


class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='author')
    content = models.TextField()
    tag = models.ForeignKey(Tag, on_delete=models.SET_NULL, null=True, blank=True, default="")

    class Meta:
        verbose_name = "Post"
        verbose_name_plural = "Posts"

    def __str__(self):
        return self.author.__str__() + " " + self.content
