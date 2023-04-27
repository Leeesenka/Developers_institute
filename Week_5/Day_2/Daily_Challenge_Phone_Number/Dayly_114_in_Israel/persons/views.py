from django.shortcuts import render, redirect
from .models import Person
from .forms import PersonForm

def search(model, value):
    result = None
    try:
        model_instance = model.objects.get(name = value)
        result= model_instance
    except model.DoesNotExist:
        pass

    try:
        model_instance = model.objects.get(phone_number = value)
        result= model_instance
    except model.DoesNotExist:
        pass
    return result    

def home(request):
    if request.method == "POST":
        form = PersonForm(request.POST)
        if form.is_valid():
            search_type = form.cleaned_data["search_type"]
            if search_type == "name":
                name = form.cleaned_data["query"]
                return redirect("person_view", name)
            else:
                phone_number=form.cleaned_data["phone_number"]
                return redirect("search_person", phone_number )
    else:
        form = PersonForm()
        context = {"form": form}

    return render(request, "displaysform.html", context)

# def search_person(request, search_value: str):
#     contex = {}
#     person_info = search(Person,search_value )

#     if person_info is not None:
#         contex = {'person': person_info}
 
#     return render(request, 'phonenumber.html', contex)


def search_person(request, phone_number):
    number = Person.objects.filter(phone_number=phone_number).first()
    context = {"number": number}
    return render(request, "phonenumber.html", context)

def person_view(request, name):
    person = Person.objects.filter(name__icontains=name).first()
    context = {"person": person}
    return render(request, "profile.html", context)

# def person_view(request, search_value: str):
#     contex= {}
#     person_info = search(Person, search_value)
#     if person_info is not None:
#         person_profile = person_info.profile
#         profile_languages = person_profile.languages.all().order_by('name')
#         contex = {'person_info': person_info, 'profile': person_profile, 'languages': profile_languages}
#     return render(request, 'profile.html', contex)


