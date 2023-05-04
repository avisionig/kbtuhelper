from django.db import models

# Create your models here.


class Organization(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    photo = models.URLField()

    class Meta:
        verbose_name = "Organization"
        verbose_name_plural = "Organizations"

    def __str__(self):
        return self.name


class News(models.Model):
    title = models.TextField()
    description = models.TextField()
    date = models.DateField(auto_now_add=True)

    class Meta:
        verbose_name = "News"
        verbose_name_plural = "News"

    def __str__(self):
        return self.title


class Event(models.Model):
    title = models.TextField()
    description = models.TextField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
