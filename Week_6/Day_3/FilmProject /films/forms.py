from django import forms
from .models import Film, Director, Comment, FilmRating
from django.core.exceptions import ValidationError


class AddFilmForm(forms.ModelForm):
    class Meta:
        model = Film
        fields = ['title', 'created_in_country', 'available_in_countries', 'category', 'director']

class AddDirectorForm(forms.ModelForm):
    class Meta:
        model = Director
        fields = ['first_name', 'last_name']




class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['text']
        labels = {'text': 'Comment'}        


class RateFilmForm(forms.ModelForm):
    class Meta:
        model = FilmRating
        fields = ['rating']
        labels = {'rating': 'Rating'}