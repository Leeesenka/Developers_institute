from django import forms
from .models import CustomerModel, Vehicle
from django.core.validators import EmailValidator, MinLengthValidator

class CustomerForm(forms.ModelForm):
    first_name = forms.CharField(validators=[MinLengthValidator(2)])
    last_name = forms.CharField(validators=[MinLengthValidator(2)])
    email = forms.EmailField(validators=[EmailValidator()])

    class Meta:
        model = CustomerModel
        fields = ['first_name', 'last_name', 'email', 'phone_number', 'address', 'city', 'country']

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if CustomerModel.objects.filter(email=email).exists():
            raise forms.ValidationError('This email is already in use.')
        return email
class VehicleForm(forms.ModelForm):
    class Meta:
        model = Vehicle
        fields = ['vehicle_type', 'real_cost', 'size']