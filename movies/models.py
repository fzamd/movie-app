from django.db import models
from datetime import datetime


class Movie(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(max_length=2000)
    published_at = models.DateTimeField(default=datetime.now())
