from django.contrib import admin

# Register your models here.
from .models import CustomerModel, Vehicle_Type, Vehicle_Size, Vehicle, Rental, Rental_Rate


admin.site.register(CustomerModel)
admin.site.register(Vehicle_Type)
admin.site.register(Vehicle_Size)
admin.site.register(Vehicle)
admin.site.register(Rental)
admin.site.register(Rental_Rate)