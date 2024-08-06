from django.contrib import admin

from comments.models import Comment


class CommentAdmin(admin.ModelAdmin):
    list_display = ['id', 'content', 'review_id', 'user_id']


admin.site.register(Comment, CommentAdmin)
