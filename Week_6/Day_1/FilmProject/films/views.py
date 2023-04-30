from django.shortcuts import render
from django.urls import reverse, reverse_lazy
from django.views import generic
from .models import Film, Director
from .forms import AddFilmForm, AddDirectorForm
from datetime import date



class AddFilmView(generic.CreateView):
    model = Film
    form_class = AddFilmForm
    template_name = 'addFilm.html'
    success_url = reverse_lazy('all_film') 

    # def get_context_data(self, **kwargs): 
    #     context = super().get_context_data(**kwargs)
    #     context['current_date'] = date.today()
    #     return context  

class AddDirectorView(generic.CreateView):
    model = Director
    form_class = AddDirectorForm
    template_name = 'addDirector.html'
    success_url = reverse_lazy('add_director')    

class AddFilmView_d(generic.ListView):

    template_name = 'Films.html'
    context_object_name = 'films'
    model = Film

    def get_context_data(self, **kwargs): 
        context = super().get_context_data(**kwargs)
        context['current_date'] = date.today()
        return context     