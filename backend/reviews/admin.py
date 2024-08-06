from django.contrib import admin

from reviews.models import Review


class ReviewAdmin(admin.ModelAdmin):
    list_display = ['id', 'content', 'rating', 'user_id']


admin.site.register(Review, ReviewAdmin)
