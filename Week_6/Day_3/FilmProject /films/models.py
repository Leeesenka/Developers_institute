from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Country(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.name}'

class Category(models.Model):
    name = models.CharField(max_length=50) 

    def __str__(self):
        return f'{self.name}'
    

class  Director(models.Model):
    first_name = models.CharField(max_length=50) 
    last_name = models.CharField(max_length=50) 

    def __str__(self):
        return f'{self.first_name}, {self.last_name}'





class Film(models.Model):
    title = models.CharField(max_length=255)
    release_date = models.DateField(auto_now_add=True)
    created_in_country = models.ForeignKey(Country, on_delete=models.CASCADE, related_name='films_created')
    available_in_countries = models.ManyToManyField(Country, related_name='films_available')
    category = models.ManyToManyField(Category)
    director = models.ManyToManyField(Director)
    rating = models.DecimalField(max_digits=3, decimal_places=2, default=0)

    def __str__(self):
            return f'{self.title}'
    
class FilmRating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    rating = models.PositiveSmallIntegerField(default=0)

    class Meta:
        unique_together = ('user', 'film')

    def __str__(self):
        return f'{self.user.username}: {self.rating}'


class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    film = models.ForeignKey(Film, on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username}: {self.text}'
