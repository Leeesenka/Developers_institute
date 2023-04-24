
from django.shortcuts import render, redirect, get_object_or_404
from datetime import datetime
from .forms import Gif, Category
from .models import GifModel, Category_Model
from django.http import HttpResponseRedirect
from django.urls import reverse

def home(request):
    gifs = GifModel.objects.all()
    context = {'gifs': gifs}
    return render(request, 'home.html',context)


def add_gif(request):
    context = {
        'form': Gif()
    }
    return render(request, 'add_gif.html', context)

def add_category(request):
    context = {
        'form': Category()
    }
    return render(request, 'add_category.html', context)

def add_new_category(request):
    if request.method == 'POST':
        form = Category(request.POST)
        if form.is_valid():
            form.save()
            return redirect('categories')
    else:
        form = Category()
    return render(request, 'add_category.html', {'form': form})

def add_gif_info(request):
    if request.method == 'POST':
        form = Gif(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = Gif()
    return render(request, 'add_gif.html', {'form': form})

def Category_view(request, category_id):
    gifs = GifModel.objects.filter(id=category_id)
  
    context = {'gifs': gifs}
    return render(request, 'category.htm',context)


def categories(request):
    categories = Category_Model.objects.all()
    context = {'categories': categories}
    return render(request, 'all_category.html',context)
   
def gif(request, gif_id):
    gif = get_object_or_404(GifModel, id=gif_id)
    return render(request, 'gif.html', {'gif': gif})



def like_gif(request, gif_id):
    gif = get_object_or_404(GifModel, id=gif_id)
    if request.method == 'POST':
        like = int(request.POST.get('like', 0))
        gif.likes += like
        gif.save()
    return redirect('gif', gif_id=gif_id)

def popular_gifs(request):
    gifs = GifModel.objects.filter(likes__gt=0).order_by('-likes')
    return render(request, 'popular_gifs.html', {'gifs': gifs})
