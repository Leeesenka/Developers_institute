from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.



class Person(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_number = PhoneNumberField()
    address = models.CharField(max_length=255)

    def __str__(self):
        return f'{self.name} | {self.phone_number}'
    

class Profile(models.Model):
    person = models.OneToOneField('Person', on_delete= models.CASCADE)
    country_origin = models.CharField(max_length=50) 
    languages = models.ManyToManyField('Language')   

    def __str__(self) -> str:
        return f"{self.country_origin}"

class language(models.Model):
    name = models.CharField(max_length=50)  

    def __str__(self) -> str:
        return f"{self.name}"  

  