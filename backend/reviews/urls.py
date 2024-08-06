from django.urls import path

from reviews.views import PostReview, ListReviewByRestaurant, ListReviewByUser, GetEditDeleteReview, \
    ToggleLikeReviewView, ListLikedReviews, GetReviewsByUserComment

urlpatterns = [
    path('new/<int:restaurant_id>/', PostReview.as_view()),
    path('restaurant/<int:restaurant_id>/', ListReviewByRestaurant.as_view()),
    path('user/<int:user_id>/', ListReviewByUser.as_view()),
    path('<int:id>/', GetEditDeleteReview.as_view()),
    path('like/<int:review_id>/', ToggleLikeReviewView.as_view()),
    path('likes/', ListLikedReviews.as_view()),
    path('comments/', GetReviewsByUserComment.as_view()),
]
