# Generated by Django 4.2 on 2023-04-24 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gifs', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='gifmodel',
            name='localtime',
        ),
        migrations.AddField(
            model_name='gifmodel',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=3),
            preserve_default=False,
        ),
    ]
