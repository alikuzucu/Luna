from rest_framework import serializers

from Categories.models import Categories


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'
