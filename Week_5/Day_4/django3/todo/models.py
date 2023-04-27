from django.db import models

class CategoryModel(models.Model):
    name = models.CharField(max_length=50)
    image = models.URLField(max_length=2000)


    def __str__(self):
        return f'{self.name}'

class TodoModel(models.Model):
    title = models.CharField(max_length=200)
    details = models.CharField(max_length=200)
    has_been_done = models.BooleanField(default= False)
    date_creation = models.DateTimeField(auto_now_add=True)
    date_completion = models.DateTimeField(null=True, blank=True)
    deadline_date = models.DateTimeField(null=True, blank=True)
    category = models.ForeignKey(CategoryModel, on_delete = models.SET_NULL, null = True)

    def __str__(self):
        return f'{self.title}'


