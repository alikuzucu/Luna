from django.urls import path

from Categories.views import GetCategoryView

urlpatterns = [
    path('', GetCategoryView.as_view())
]
