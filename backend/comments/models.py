from django.contrib.auth import get_user_model
from django.db import (models)

from reviews.models import Review

User = get_user_model()


class Comment(models.Model):
    content = models.TextField(max_length=1000)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    review = models.ForeignKey(Review, on_delete=models.CASCADE)
