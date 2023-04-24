from django.contrib import admin

# Register your models here.
from .models import GifModel, Category_Model


admin.site.register(GifModel)
admin.site.register(Category_Model)
