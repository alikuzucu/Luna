from rest_framework import serializers

from comments.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id', 'content', 'user', 'review', 'created', 'updated']
        read_only_fields = ['user', 'review', 'created', 'updated']
