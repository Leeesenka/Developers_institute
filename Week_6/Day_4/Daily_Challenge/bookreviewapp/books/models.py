from django.db import models
from django.contrib.auth.models import User


class Book(models.Model):
    title = models.CharField(max_length=250)
    author = models.CharField(max_length=250)
    published_date = models.DateField()
    description = models.TextField()
    page_count = models.IntegerField()
    categories = models.CharField(max_length=250)
    thumbnail_url = models.URLField()

    def __str__(self):
        return self.title
    

class BookReview(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    review_text = models.TextField()
    rating = models.FloatField(null=True, blank=True)


    def __str__(self):
        return f"{self.user.username}'s review of {self.book.title}"