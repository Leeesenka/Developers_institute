from django.contrib import admin

# Register your models here.
from .models import Film, Director, Country, Category

admin.site.register(Film)
admin.site.register(Director)
admin.site.register(Country)
admin.site.register(Category)