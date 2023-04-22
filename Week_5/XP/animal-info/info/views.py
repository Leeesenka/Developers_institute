from django.shortcuts import render

# Create your views here.


from .models import Animal, Family

def family(request, family_id):
    family = Family.objects.get(id=family_id)
    animals = Animal.objects.filter(family=family)
    return render(request, 'info/family.html', {'animals': animals})

def animal(request, animal_id):
    animal = Animal.objects.get(id=animal_id)
    return render(request, 'info/animal.html', {'animal': animal})
