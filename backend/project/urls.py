"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
# from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt import views as jwt_views
from rest_framework.permissions import AllowAny
from drf_yasg import openapi
from drf_yasg.views import get_schema_view
# serving media-files in development mode
from django.conf import settings
from django.conf.urls.static import static

# swager
schema_view = get_schema_view(
    openapi.Info(
        title="Django API",
        default_version='v1',
        description="",
        terms_of_service="https://www.google.com/policies",
        contact=openapi.Contact(email="<EMAIL>"),
        license=openapi.License(name=""),

    ),
    public=True,
    permission_classes=[AllowAny, ], )


urlpatterns = [
    path('backend/admin/', admin.site.urls),
    # path('backend/api/docs/', include_docs_urls(title='Luna Backend', public=True, permission_classes=[])),
    path('backend/api/docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('backend/api/home/', include('home.urls')),
    path('backend/api/registration/', include('registration.urls')),
    path('backend/api/reviews/like/', include('likereviews.urls')),
    path('backend/api/users/', include('user.urls')),
    path('backend/api/reviews/', include('review.urls')),
    path('backend/api/comments/', include('comment.urls')),
    path('backend/api/restaurants/', include('restaurant.urls')),
    path('backend/api/category/', include('category.urls')),
    path('backend/api/auth/token/', jwt_views.TokenObtainPairView.as_view()),
    path('backend/api/auth/token/refresh/', jwt_views.TokenRefreshView.as_view()),
    path('backend/api/auth/token/verify/', jwt_views.TokenVerifyView.as_view()),
]

# serving media-files in development mode
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
