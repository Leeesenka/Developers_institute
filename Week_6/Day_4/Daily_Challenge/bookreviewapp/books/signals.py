from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models import Avg
from .models import Book, BookReview

@receiver(post_save, sender=BookReview)
def update_book_rating(sender, instance, **kwargs):
    book = instance.book
    reviews = BookReview.objects.filter(book=book)
    average_rating = reviews.aggregate(Avg('rating'))['rating__avg']
    book.rating = average_rating
    book.save()
