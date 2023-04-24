from django.shortcuts import render
from .models import Person


# def person_number(request):
#     phone_number = request.GET.get("phone_number", "")
#     person = Person.objects.filter(phone_number=phone_number).first()
#     context = {"person": person, "search_type": "phone_number"}
#     return render(request, 'phonenumber.html', context)

# def person_name(request):
#     name = request.GET.get("name", "")
#     person = Person.objects.filter(name__icontains=name).first()
#     context = {"person": person, "search_type": "name"}
#     return render(request, "name.html", context)


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


def search_person(request, search_value: str):
    contex = {}
    person_info = search(Person,search_value )

    if person_info is not None:
        contex = {'person': person_info}
 
    return render(request, 'phonenumber.html', contex)


def person_view(request, search_value: str):
    contex= {}
    person_info = search(Person, search_value)
    if person_info is not None:
        person_profile = person_info.profile
        profile_languages = person_profile.languages.all().order_by('name')
        contex = {'person_info': person_info, 'profile': person_profile, 'languages': profile_languages}
    return render(request, 'profile.html', contex)


