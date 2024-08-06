from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

from restaurant.models import Restaurant

User = get_user_model()


class Review(models.Model):
    content = models.TextField(max_length=1000, blank=True, null=True)
    rating = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(to=User, related_name='liked_by', blank=True, null=True)

    def __str__(self):
        return self.content
