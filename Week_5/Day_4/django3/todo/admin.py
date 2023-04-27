from django.contrib import admin

# Register your models here.
from .models import CategoryModel, TodoModel


admin.site.register(CategoryModel)
admin.site.register(TodoModel)