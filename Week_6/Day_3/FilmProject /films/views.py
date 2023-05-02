from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse, reverse_lazy
from django.views import generic
from .models import Film, Director, Comment
from .forms import AddFilmForm, AddDirectorForm, CommentForm, RateFilmForm
from datetime import date
from django.contrib.auth.decorators import user_passes_test
from django.contrib import messages

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
    
def user_is_admin(user):
    if user.is_authenticated:
        return user.is_superuser
    return False

@user_passes_test(user_is_admin, login_url='/login/')
def delete_film(request, film_id):
    if not request.user.is_superuser:
        messages.error(request, 'You do not have permission to delete the movie.')
    else:
        film = get_object_or_404(Film, id=film_id)
        film.delete()
        messages.success(request, 'Movie deleted successfully.')
    return redirect('all_film')

def films(request):
    films = Film.objects.all()
    context = {'films': films}
    return render(request, 'all_films.html',context)

@user_passes_test(user_is_admin, login_url='/login/')
def delete_director(request, director_id):
    director = get_object_or_404(Director, id=director_id)
    director.delete()
    return redirect('all_directors')   

def directors(request):
    directors = Director.objects.all()
    context = {'directors': directors}
    return render(request, 'all_directors.html',context)


def film_detail(request, film_id):
    film = get_object_or_404(Film, id=film_id)
    comments = Comment.objects.filter(film=film).order_by('-created_at')

    if request.method == 'POST':
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = form.save(commit=False)
            comment.user = request.user
            comment.film = film
            comment.save()
            return redirect('film_detail', film_id=film.id)
    else:
        form = CommentForm()

    context = {
        'film': film,
        'comments': comments,
        'form': form,
    }
    return render(request, 'film_detail.html', context)
