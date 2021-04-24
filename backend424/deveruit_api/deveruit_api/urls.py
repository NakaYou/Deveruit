from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
from django.conf import settings
from django.conf.urls import url
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', views.obtain_auth_token),
    path('api/user/', include('deveruit.user_urls')),
    path('api/', include('deveruit.recruit_urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
