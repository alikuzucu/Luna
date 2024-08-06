from django.urls import path

from user.views import MeView, UserDetailView, UserListView, RegistrationView, RegistrationValidateView
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('auth/registration/', RegistrationView.as_view()),
    path('auth/registration/validation/', RegistrationValidateView.as_view()),
    path('auth/token/', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('auth/token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_refresh'),
    path('users/list/', UserListView.as_view(), name='user_list'),
    path('users/<int:user_id>/', UserDetailView.as_view(), name='user-profile'),
    path('me/', MeView.as_view())
]
