from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView
from rest_framework.permissions import IsAuthenticated

from comments.models import Comment
from comments.serializers import CommentSerializer
from user.permissions import IsCreator


class CommentViewByUser(ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user_id = self.kwargs.get('user_id')
        return Comment.objects.filter(user_id=user_id)


class CommentListByReview(CreateAPIView):
    serializer_class = CommentSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = 'review_id'

    def perform_create(self, serializer):
        serializer.save(user=self.request.user, review_id=self.kwargs.get('review_id'))


class DeleteCommentView(DestroyAPIView):
    permission_classes = [IsCreator]
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
