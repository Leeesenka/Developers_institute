from django import forms
from .models import Category_Model, GifModel

class Gif(forms.ModelForm):
    class Meta:
        model = GifModel
        fields = ('title', 'url', 'uploader_name')
        categories = forms.ModelMultipleChoiceField(queryset=Category_Model.objects.all())    
        # uploader_name = forms.CharField()
        # title = forms.CharField(max_length=50)
        # url = forms.URLField(max_length=2000)
        # categories = forms.ModelMultipleChoiceField(queryset=Category_Model.objects.all())
    

class Category(forms.ModelForm):
    class Meta:
        model = Category_Model
        fields = '__all__'
    