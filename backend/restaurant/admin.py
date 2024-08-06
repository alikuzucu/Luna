from django.contrib import admin

from restaurant.models import Restaurant


class RestaurantAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'country', 'city')


admin.site.register(Restaurant, RestaurantAdmin)
