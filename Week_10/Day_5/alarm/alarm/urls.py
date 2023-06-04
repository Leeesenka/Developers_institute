"""
URL configuration for alarm project.

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
from data import views
from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings


router = routers.DefaultRouter()
router.register(r'messages', views.MessageViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('messages/', views.messages_list, name='messages_list'),
    path('api/', include(router.urls)),
    path('graph_city/', views.city_alerts_graph, name='city_alerts_graph'),
    path('graph_time/', views.time_alerts_graph, name='time_alerts_graph'),
    path('month_time/', views.month_alerts_graph, name='month_alerts_graph'),
    path('index_alerts/', views.index_alerts_graph, name='index_alerts_graph'),


    
]
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


