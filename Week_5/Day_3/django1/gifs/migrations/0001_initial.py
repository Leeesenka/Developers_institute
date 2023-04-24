# Generated by Django 4.2 on 2023-04-24 10:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GifModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('url', models.URLField(max_length=2000)),
                ('uploader_name', models.CharField(max_length=200)),
                ('localtime', models.DateTimeField(verbose_name='now')),
            ],
        ),
        migrations.CreateModel(
            name='Category_Model',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('gifs', models.ManyToManyField(to='gifs.gifmodel')),
            ],
        ),
    ]
