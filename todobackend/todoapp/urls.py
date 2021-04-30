from django.urls import path,include
from rest_framework import routers
from .views import TodoItemViewSet
router = routers.DefaultRouter()

router.register(r'todo',TodoItemViewSet)

urlpatterns = [
    path('',include(router.urls))
]