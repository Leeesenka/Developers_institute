# Generated by Django 4.2 on 2023-05-02 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('films', '0002_film_rating_filmrating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filmrating',
            name='rating',
            field=models.PositiveSmallIntegerField(default=0),
        ),
    ]