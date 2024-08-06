from rest_framework import serializers

from reviews.models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ['id', 'user', 'restaurant', 'rating', 'content', 'created', 'updated']
        read_only_fields = ['updated', 'created', 'user', 'restaurant']
