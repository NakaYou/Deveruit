from django.urls import path, include
from deveruit import views
from rest_framework.routers import DefaultRouter

app_name = 'user'

router = DefaultRouter()

urlpatterns = [
    path('list-user/', views.ListUserView.as_view(), name='list'),
    path('', views.CreateUserView.as_view(), name='create'),
    path('', include(router.urls))
]
