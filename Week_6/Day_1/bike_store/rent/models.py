from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class CustomerModel(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=60)
    email = models.EmailField(max_length=60)
    phone_number = PhoneNumberField()
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.first_name}'

class Vehicle_Type(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

class Vehicle_Size(models.Model):
    name= models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

class Vehicle(models.Model):
    vehicle_type = models.ForeignKey(Vehicle_Type, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    real_cost = models.FloatField()
    size = models.ForeignKey(Vehicle_Size, on_delete=models.CASCADE)

class Rental(models.Model):
    rental_date = models.DateTimeField(null=True, blank=True)
    return_date = models.DateTimeField(null=True, blank=True)
    customer = models.ForeignKey(CustomerModel, on_delete=models.CASCADE)
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    def __str__(self):
            return f'{self.customer}, {self.vehicle}'

class Rental_Rate(models.Model):
        daily_rate = models.DecimalField(max_digits=6, decimal_places=2)
        vehicle_type = models.ForeignKey(Vehicle_Type, on_delete=models.CASCADE)
        vehicle_size = models.ForeignKey(Vehicle_Size, on_delete=models.CASCADE)
        
        def __str__(self):
            return f'{self.vehicle_type}, {self.vehicle_size}'    



