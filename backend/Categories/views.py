from rest_framework.generics import ListAPIView

from Categories.models import Categories
from Categories.serializers import CategorySerializer


class GetCategoryView(ListAPIView):
    queryset = Categories.objects.all()
    serializer_class = CategorySerializer
