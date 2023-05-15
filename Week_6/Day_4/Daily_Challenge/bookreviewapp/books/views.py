
from django.shortcuts import render, redirect, get_object_or_404
from .models import Book, BookReview
import requests
from django.contrib.auth.decorators import login_required
from django.db.models import Avg, Count

def search(request):
    query = request.GET.get('query', '')
    books = Book.objects.filter(title__icontains=query)
    return render(request, 'search.html', {'books': books})


def fetch_books(query):
    url = 'https://www.googleapis.com/books/v1/volumes?q='
    response = requests.get(url + query)

    if response.status_code == 200:
        books_json = response.json()['items']
        books = []

        for book_data in books_json:
            book_info = book_data['volumeInfo']
            book = Book(
                title=book_info.get('title', ''),
                author=', '.join(book_info.get('authors', [])),
                published_date=book_info.get('publishedDate', ''),
                description=book_info.get('description', ''),
                page_count=book_info.get('pageCount', 0),
                categories=', '.join(book_info.get('categories', [])),
                thumbnail_url=book_info['imageLinks']['thumbnail'] if 'imageLinks' in book_info else ''
            )
            books.append(book)
        return books

    return []

def book_detail(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    reviews = BookReview.objects.filter(book=book)
    average_rating = reviews.aggregate(Avg('rating'))['rating__avg']
    review_count = reviews.aggregate(Count('id'))['id__count']
    return render(request, 'book_detail.html', {'book': book, 'reviews': reviews, 'average_rating': average_rating, 'review_count': review_count})

@login_required
def add_review(request, book_id):
    if request.method == 'POST':
        book = get_object_or_404(Book, pk=book_id)
        rating = int(request.POST['rating'])
        review_text = request.POST['review_text']
        review = BookReview(book=book, user=request.user, rating=rating, review_text=review_text)
        review.save()
        return redirect('book_detail', book_id=book.id)
    else:
        return render(request, 'add_review.html', {'book_id': book_id})