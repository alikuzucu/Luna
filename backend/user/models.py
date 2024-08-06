import random
import string

from django.contrib.auth.models import AbstractUser
from django.db import models


def code_generator(length=12):
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for i in range(length))


def get_user_path_profile(instance, filename):
    return f'users/{instance.id}/profile_picture/{filename}'


def get_user_path_banner(instance, filename):
    return f'users/{instance.id}/banner_picture/{filename}'


class User(AbstractUser):
    about_me = models.CharField(verbose_name='user description', max_length=1000, blank=True)
    location = models.CharField(verbose_name='user location', max_length=100, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    things_i_love = models.TextField(verbose_name='things_i_love', blank=True)
    description = models.TextField(verbose_name='description', blank=True)
    profile_picture = models.ImageField(upload_to=get_user_path_profile, blank=True, null=True)
    banner_picture = models.ImageField(upload_to=get_user_path_banner, blank=True, null=True)

    username = models.CharField(
        max_length=150,
        blank=True,
        null=True,
        validators=[AbstractUser.username_validator],
    )

    code = models.CharField(max_length=12, default=code_generator)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name', 'last_name', 'username']
