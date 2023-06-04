
from django.db import models

class Message(models.Model):
    id = models.AutoField(primary_key=True)
    date = models.TextField(null=True, blank=True)
    time = models.TextField(null=True, blank=True)
    city1 = models.TextField(null=True, blank=True)
    city2 = models.TextField(null=True, blank=True)
    city2_english = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'messages'  # Замените на имя вашей существующей таблицы
