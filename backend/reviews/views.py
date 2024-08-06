import logging

from rest_framework import status
from rest_framework.generics import CreateAPIView, ListAPIView, RetrieveUpdateDestroyAPIView, \
    GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurant.models import Restaurant
from reviews.models import Review
from reviews.serializers import ReviewSerializer
from user.permissions import IsOwnerOrReadOnly

logger = logging.getLogger(__name__)


class PostReview(CreateAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)
    lookup_field = 'restaurant_id'

    def perform_create(self, serializer):
        restaurant = Restaurant.objects.get(pk=self.kwargs[self.lookup_field])
        serializer.save(user=self.request.user, restaurant=restaurant)


class ListReviewByRestaurant(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        restaurant = self.kwargs['restaurant_id']
        return Review.objects.filter(restaurant=restaurant)


class ListReviewByUser(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.kwargs['user_id']
        return Review.objects.filter(user=user)


class GetEditDeleteReview(RetrieveUpdateDestroyAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsOwnerOrReadOnly,)
    lookup_field = 'id'

    def get_queryset(self):
        review_id = self.kwargs[self.lookup_field]
        return Review.objects.filter(id=review_id)


class ToggleLikeReviewView(GenericAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)
    queryset = Review.objects.all()
    lookup_url_kwarg = 'review_id'

    def post(self, request, *args, **kwargs):
        target_review = self.get_object()
        if target_review.liked_by.filter(id=request.user.id).exists():
            target_review.liked_by.remove(request.user)
        else:
            target_review.liked_by.add(request.user)
        target_review.save()
        return Response({'message': 'like/unlike operation done'}, status=status.HTTP_200_OK)


class ListLikedReviews(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        return Review.objects.filter(liked_by=user)


class GetReviewsByUserComment(ListAPIView):
    serializer_class = ReviewSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        user = self.request.user
        target_reviews = Review.objects.filter(comment__user=user)
        return target_reviews
