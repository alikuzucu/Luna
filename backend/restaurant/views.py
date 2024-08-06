from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from restaurant.models import Restaurant
from restaurant.serializers import RestaurantSerializer
from user.permissions import IsOwnerOrReadOnly


class GetAllRestaurants(ListAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer


class PostRestaurants(CreateAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class GetRestaurantsPerCategory(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        category_id = self.kwargs['category_id']
        return Restaurant.objects.filter(category_id=category_id)


class GetRestaurantsByUser(ListAPIView):
    serializer_class = RestaurantSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Restaurant.objects.filter(user_id=user_id)


class GetEditDeleteRestaurant(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantSerializer
    permission_classes = [IsOwnerOrReadOnly]
    lookup_field = 'id'

    def get_queryset(self):
        restaurant_id = self.kwargs[self.lookup_field]
        return Restaurant.objects.filter(id=restaurant_id)
