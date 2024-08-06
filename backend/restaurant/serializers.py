from rest_framework import serializers

from restaurant.models import Restaurant


class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'country', 'city', 'price_level', 'user', 'category']
        read_only_fields = ['user']
