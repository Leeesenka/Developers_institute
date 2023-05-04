# Generated by Django 4.2 on 2023-04-24 08:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('persons', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='language',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('country_origin', models.CharField(max_length=50)),
                ('languages', models.ManyToManyField(to='persons.language')),
                ('person', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='persons.person')),
            ],
        ),
    ]