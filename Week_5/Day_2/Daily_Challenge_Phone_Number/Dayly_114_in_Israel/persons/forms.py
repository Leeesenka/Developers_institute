from django import forms

from phonenumber_field.formfields import PhoneNumberField

class PersonForm(forms.Form):
    search_type = forms.ChoiceField(choices=[("name", "Name"), ("phone_number", "Phone Number")], widget=forms.RadioSelect)
    query = forms.CharField(required=True)
    phone_number = PhoneNumberField(required=False)


