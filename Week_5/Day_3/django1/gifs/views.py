from django.shortcuts import render, redirect
from .forms import Gif, Category
from .models import GifModel, Category_Model


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

   



