
from django.urls import path
from django.urls import path
from students.views import student_list, student_detail

urlpatterns = [

    path('students/', student_list, name='student_list'),
    path('students/<int:pk>/', student_detail, name='student_detail'),
]

