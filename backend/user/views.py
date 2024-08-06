from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework import status
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListAPIView, RetrieveAPIView, CreateAPIView, \
    GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from user.serializers import UserSerializer, UserUpdateSerializer, FirstUserRegistrationSerializer, \
    UserRegistrationSerializer

User = get_user_model()


class MeView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user

    def get_serializer_class(self):
        if self.request.method == 'PATCH':
            return UserUpdateSerializer
        return UserSerializer


class UserListView(ListAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        search_str = self.request.query_params.get('search', None)
        if search_str:
            return User.objects.filter(Q(first_name__icontains=search_str) | Q(last_name__icontains=search_str))
        return User.objects.all()


class UserDetailView(RetrieveAPIView):
    serializer_class = UserSerializer
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    lookup_url_kwarg = 'user_id'


class RegistrationView(CreateAPIView):
    serializer_class = FirstUserRegistrationSerializer
    permission_classes = (AllowAny,)


class RegistrationValidateView(GenericAPIView):
    serializer_class = UserRegistrationSerializer
    permission_classes = (AllowAny,)
    queryset = User.objects.all()

    def patch(self, request, *args, **kwargs):

        email = request.data.get('email')
        code = request.data.get('code')

        if not email or not code:
            return Response({'message': 'Email and code are required.'}, status=status.HTTP_400_BAD_REQUEST)
        try:
            user = User.objects.get(email=email)
        except Exception:
            return Response({'message': 'User does not found.'}, status=status.HTTP_400_BAD_REQUEST)

        if user.is_active is True:
            return Response({'message': 'You are already registered'}, status=status.HTTP_400_BAD_REQUEST)
        if user.code != code:
            return Response({'message': 'Invalid code.'}, status=status.HTTP_400_BAD_REQUEST)

        serializer = self.get_serializer(user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        user.is_active = True
        user.save()

        return Response({'message': 'your registration is complete'}, status=status.HTTP_200_OK)
