from django.contrib.auth import get_user_model
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from Categories.models import Categories

User = get_user_model()


def get_restaurant_picture_path(instance, filename):
    return f'restaurants/{instance.id}/images/{filename}'


class Restaurant(models.Model):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(to=Categories, on_delete=models.CASCADE, blank=True, null=True)
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=100, blank=True, null=True)
    city = models.CharField(max_length=100)
    zip = models.IntegerField(blank=True, null=True)
    website = models.CharField(max_length=250, blank=True, null=True)
    phone = models.PositiveIntegerField(blank=True, null=True)
    price_level = models.IntegerField(default=1, validators=[MaxValueValidator(4), MinValueValidator(1)])
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_restaurant_picture_path, blank=True, null=True)
