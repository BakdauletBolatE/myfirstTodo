from django.db import models

# Create your models here.


class TodoItem(models.Model):

    task = models.CharField(max_length=255)
    isDone = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now=True)

    def __str__(self):

        return self.task

    class Meta:

        verbose_name = 'Задача'
        verbose_name_plural = 'Задачи'