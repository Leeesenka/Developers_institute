from django.db import models

# Create your models here.
from django.db import models

class Alert(models.Model):
    date = models.DateField()
    time = models.TimeField()
    city = models.CharField(max_length=100)  # Добавлено поле для хранения города
