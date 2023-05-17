from rest_framework import serializers
from .models import Department, Employee, Project, Task

class DepartmentSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='department_detail')

    class Meta:
        model = Department
        fields = ['url', 'name', 'description']

class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='employee_detail')

    class Meta:
        model = Employee
        fields = ['url', 'name', 'email', 'phone_number', 'department']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    url = serializers.HyperlinkedIdentityField(view_name='task_detail')

    class Meta:
        model = Task
        fields = ['url', 'name', 'description', 'due_date', 'completed', 'project']
