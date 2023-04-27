from django import forms
from .models import CategoryModel, TodoModel


class TodoForm(forms.ModelForm):
    class Meta:
        model= TodoModel
        fields = ('title', 'details', 'deadline_date', 'category')
        widgets = {
            'deadline_date': forms.DateInput(
                attrs={'type': 'date', 'placeholder': 'yyyy-mm-dd (DOB)', 'class': 'form-control'}
            )
        }