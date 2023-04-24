
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



