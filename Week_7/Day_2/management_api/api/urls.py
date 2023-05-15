from django.urls import path
from .views import DepartmentList, DepartmentDetail, EmployeeList, EmployeeDetail, ProjectList, ProjectDetail, TaskList, TaskDetail

urlpatterns = [
    path('departments/', DepartmentList.as_view(), name='department_list'),
    path('departments/<int:pk>/', DepartmentDetail.as_view(), name='department_detail'),
    path('employees/', EmployeeList.as_view(), name='employee_list'),
    path('employees/<int:pk>/', EmployeeDetail.as_view(), name='employee_detail'),
    path('projects/', ProjectList.as_view(), name='project_list'),
    path('projects/<int:pk>/', ProjectDetail.as_view(), name='project_detail'),
    path('tasks/', TaskList.as_view(), name='task_list'),
    path('tasks/<int:pk>/', TaskDetail.as_view(), name='task_detail'),
]
