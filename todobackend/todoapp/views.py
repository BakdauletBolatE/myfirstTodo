from .models import TodoItem
from django.shortcuts import render
from .serializers import TodoItemSerializer
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

class TodoItemViewSet(viewsets.ModelViewSet):

    queryset = TodoItem.objects.all().order_by('createdAt')
    serializer_class = TodoItemSerializer
    # permission_classes = [IsAuthenticated]




