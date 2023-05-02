"""
URL configuration for FilmProject project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from films.views import AddFilmView, AddDirectorView, AddFilmView_d, delete_film, films, directors, delete_director, film_detail

urlpatterns = [
    path('admin/', admin.site.urls),
    path('add_film/', AddFilmView.as_view(), name='add_film'),
    path('add_director/', AddDirectorView.as_view(), name='add_director'),
    path('films/', AddFilmView_d.as_view(),  name='all_film'),
    path('delete_film/<int:film_id>/', delete_film, name='delete_film'),
    path('all_films/', films,  name='all_films'),
    path('accounts/', include('accounts.urls')),
    path('all_directors/', directors,  name='all_directors'),
    path('delete_director/<int:director_id>/', delete_director, name='delete_director'),
    path('film/<int:film_id>/', film_detail, name='film_detail')

]
