from django.contrib import admin

# Register your models here.
from .models import Person, language, Profile


admin.site.register(Person)
admin.site.register(language)
admin.site.register(Profile)