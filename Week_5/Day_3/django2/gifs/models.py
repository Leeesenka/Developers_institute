from django.db import models

# Create your models here.

class GifModel(models.Model):
    title = models.CharField(max_length=200)
    url = models.URLField(max_length=2000)
    uploader_name =  models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)


    def __str__(self):
        return f'{self.title}, {self.uploader_name}'
    
class Category_Model(models.Model):
    name = models.CharField(max_length=200)
    gifs = models.ManyToManyField(GifModel, related_name = 'categories')

    def __str__(self):
        return f'{self.name}'

