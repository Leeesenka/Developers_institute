
from django.shortcuts import render
from .models import Message
import json
from django.db.models import Count
from .serializers import MessageSerializer
from rest_framework import viewsets

def messages_list(request):
    query = request.GET.get('q')
    if query:
        messages = Message.objects.filter(city2_english__icontains=query)
    else:
        messages = Message.objects.all()
    return render(request, 'chart.html', {'messages': messages})



class MessageViewSet(viewsets.ModelViewSet):
    queryset = Message.objects.all()
    serializer_class = MessageSerializer




def city_alerts_graph(request):
    return render(request, 'city_alerts_graph.html')

def time_alerts_graph(request):
    return render(request, 'time_alerts.html')

def month_alerts_graph(request):
    return render(request, 'month_alerts.html')

def index_alerts_graph(request):
    return render(request, 'index_alerts.html')
