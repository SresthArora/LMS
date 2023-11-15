from django.contrib import admin
from . import models

# Register your models here.
admin.site.register(models.Instructor)
admin.site.register(models.Student)
admin.site.register(models.Category)
admin.site.register(models.Course)
admin.site.register(models.Enrollment)
admin.site.register(models.Syllabus)
admin.site.register(models.Content)
admin.site.register(models.Material)
admin.site.register(models.Faq)
admin.site.register(models.ClassSchedule)
admin.site.register(models.Quizes)