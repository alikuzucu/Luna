from django.contrib import admin

from Categories.models import Categories


class CategoriesAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']


admin.site.register(Categories, CategoriesAdmin)
