from django.urls import path
from . import views

urlpatterns = [
    path('phonenumber/', views.search_by_phone_number, name='search_by_phone_number'),
    path('name/', views.search_by_name, name='search_by_name'),
]
