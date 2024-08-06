from django.urls import path

from restaurant.views import GetAllRestaurants, PostRestaurants, GetRestaurantsPerCategory, GetRestaurantsByUser, \
    GetEditDeleteRestaurant

urlpatterns = [
    path('', GetAllRestaurants.as_view()),
    path('new/', PostRestaurants.as_view()),
    path('category/<int:category_id>/', GetRestaurantsPerCategory.as_view()),
    path('user/<int:user_id>/', GetRestaurantsByUser.as_view()),
    path('<int:id>/', GetEditDeleteRestaurant.as_view()),

]
