"""
URL configuration for bike_store project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rent.views import rent_list, rental_detail, customer_detail, vehicle_detail, return_vehicle, rental_create, customer_detail_all, customer_add, vehicle_list, vehicle_add

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', rent_list, name = 'rent_list'),
    path('rentals/<int:pk>/', rental_detail, name='rental_detail'),
    path('customers/<int:pk>/', customer_detail, name='customer_detail'),
    path('vehicles/<int:vehicle_id>/', vehicle_detail, name='vehicle_detail'),
    path('rentals/<int:rental_id>/return/', return_vehicle, name='return_vehicle'),
    path('customer_detail_all/', customer_detail_all, name='customer_detail_all'),
    path('customer_add/', customer_add, name='customer_add'),
    path('vehicle_list/', vehicle_list, name='vehicle_list'),
    path('vehicle/<int:pk>/', vehicle_detail, name='vehicle_detail'),
    path('vehicle/add/', vehicle_add, name='vehicle_add'),
 
]


