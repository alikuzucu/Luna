from django.urls import path

from comments.views import CommentViewByUser, CommentListByReview, DeleteCommentView

urlpatterns = [
    path('user/<int:user_id>/', CommentViewByUser.as_view()),
    path('new/<int:review_id>/', CommentListByReview.as_view()),
    path('<int:pk>/', DeleteCommentView.as_view()),
]
