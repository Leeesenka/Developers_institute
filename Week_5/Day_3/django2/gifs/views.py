
from django.shortcuts import render, redirect, get_object_or_404
from datetime import datetime
from .forms import Gif, Category
from .models import GifModel, Category_Model
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.http import HttpResponse

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
        gif_filled_form = Category(request.POST)
        if gif_filled_form.is_valid():
            gif_filled_form.save()
            return HttpResponse('SUCCESSFULL')

    # if request.method == 'GET':
    gif_form = Category()
    context = {'form': gif_form}
    gif_filled_form = Category(request.POST)

    return render(request, 'add_gif.html',context)
    


def add_gif_info(request):

    if request.method == 'POST':
        gif_filled_form = Gif(request.POST)
        if gif_filled_form.is_valid():
            gif_filled_form.save()
            return HttpResponse('SUCCESSFULL')

    if request.method == 'GET':
        gif_form = Gif()
        context = {'form': gif_form}
        gif_filled_form = Gif(request.POST)
        return render(request, 'add_gif.html',context)


    # if request.method == 'POST':
    #     form = Gif(request.POST)
    #     if form.is_valid():
    #         form.save()
    #         return redirect('home')
    # else:
    #     form = Gif()
    # return render(request, 'add_gif.html', {'form': form})

def Category_view(request, category_id):
    category = Category_Model.objects.get(id=category_id)
    gifs = category.gifs.all
    context = {'gifs': gifs}
    return render(request, 'category.html',context)


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
