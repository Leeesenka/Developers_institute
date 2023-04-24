from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from .models import Person

def search_by_phone_number(request):
    phone_number = request.GET.get("phone_number", "")
    person = Person.objects.filter(phone_number=phone_number).first()
    context = {"person": person, "search_type": "phone_number"}
    return render(request, "phonebook_app/search_phone_number.html", context)

def search_by_name(request):
    name = request.GET.get("name", "")
    person = Person.objects.filter(name__icontains=name).first()
    context = {"person": person, "search_type": "name"}
    return render(request, "phonebook_app/search_phone_number.html", context)
