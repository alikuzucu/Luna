# Generated by Django 5.0.6 on 2024-07-09 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurant', '0003_alter_restaurant_category_alter_restaurant_phone_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurant',
            name='phone',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='restaurant',
            name='zip',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]