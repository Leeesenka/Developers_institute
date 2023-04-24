from django import forms
from .models import Category_Model

class Gif(forms.Form):
    uploader_name = forms.CharField()
    title = forms.CharField(max_length=50)
    url = forms.URLField(max_length=2000)
    categories = forms.ModelMultipleChoiceField(queryset=Category_Model.objects.all())
  

class Category(forms.Form):
    name = forms.CharField(max_length=200)