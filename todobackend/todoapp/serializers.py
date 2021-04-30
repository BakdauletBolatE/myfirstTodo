from django.db import models
from django.db.models import fields
from .models import TodoItem
from rest_framework import serializers


class TodoItemSerializer(serializers.ModelSerializer):

    class Meta:

        model = TodoItem
        fields = ['id','task','isDone','createdAt']