from django.shortcuts import render, redirect
from .models import CategoryModel, TodoModel
from .forms import TodoForm
from django.http import HttpResponse
from datetime import datetime

# Create your views here.
def add_todo(request):
    if request.method == 'POST':
        todo_filled_form = TodoForm(request.POST)
        if todo_filled_form.is_valid():
            todo_filled_form.save()
            return HttpResponse('SUCCESSFULL')

    if request.method == 'GET':
        todo_form = TodoForm()
        context = {'form': todo_form}
        todo_filled_form = TodoForm(request.POST)
        return render(request, 'add_todo.html',context)


def ToDo_all(request):
    todos = TodoModel.objects.all()
    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('ToDo_all')
    else:
        form = TodoForm()

    return render(request, 'all_ToDo.html', {'todos': todos, 'form': form})


def todo_done(request, todo_id):
    todo = TodoModel.objects.get(id=todo_id)
    todo.has_been_done = True
    todo.date_completion = datetime.now()
    todo.save()
    return HttpResponse('SUCCESSFULL')
 


