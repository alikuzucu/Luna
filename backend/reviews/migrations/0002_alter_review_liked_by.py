# Generated by Django 5.0.6 on 2024-07-10 09:59

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='liked_by',
            field=models.ManyToManyField(blank=True, null=True, related_name='liked_by', to=settings.AUTH_USER_MODEL),
        ),
    ]