from django.db import models
from datetime import date
# Create your models here.
# Intructor models here.

class Instructor(models.Model):
    firstName = models.CharField(max_length=100, default='')
    lastName = models.CharField(max_length=100, default='')
    email = models.CharField(max_length=100, unique=True, default='')
    password = models.CharField(max_length=100, default='')
    dob = models.DateField(null=False,default=date(2000, 1, 1))
    address = models.CharField(max_length=100, default='')
    contactNumber = models.CharField(max_length=10, default='')
    profilePicture = models.ImageField(upload_to='teacher_images/',null=True, blank=True)
    #verificationStatus = models.CharField(max_length=100)
    class Meta:
        verbose_name_plural = "Instructor"
    def __str__(self):
        return self.firstName + ' ' + self.lastName

 

# Student models here.

class Student(models.Model):
    firstName = models.CharField(max_length=100, default='')  # Set an empty string as the default
    lastName = models.CharField(max_length=100, default='')
    email = models.CharField(max_length=100, unique=True, default='')
    password = models.CharField(max_length=100, default='')
    dob = models.DateField(null=False,default=date(2000, 1, 1))
    address = models.CharField(max_length=100, default='')
    contactNumber = models.CharField(max_length=10, default='')
    profilePicture = models.ImageField(upload_to='student_images/', null=True, blank=True)
    verificationStatus = models.CharField(max_length=10, null=True, default='')

    class Meta:
        verbose_name_plural = "Student"

    def __str__(self):
        return f"{self.firstName} {self.lastName}"


 

# Category models here.

class Category(models.Model):
    categoryName = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    class Meta:
        verbose_name_plural = "Categories"
    def __str__(self):
        return self.categoryName

 

# Course models here.

class Course(models.Model):
    courseName = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    fk_category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name="category")
    fk_intructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, verbose_name="Intructor")
    fk_student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="Student",null=True)
    enrollmentCapacity = models.IntegerField()
    startDate = models.DateField(null=False)
    endDate = models.DateField(null=False)
    # progressStatus =
    class Meta:
        verbose_name_plural = "Course"
    def __str__(self):
        return self.courseName

  

# Enrollments models here.

class Enrollment(models.Model):
    fk_student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="Student", related_name='enrolled_student')
    fk_course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name="Course", related_name='enrolled_courses')
    enrollmentDate = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = "Enrollment"
    def __str__(self):
        return f"{self.fk_course}-{self.fk_student}"

# class Enrollment(models.Model):
#     fk_student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="Student")
#     fk_course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name="Course")
#     enrollmentDate = models.DateField(null=False)
#     class Meta:
#         verbose_name_plural = "Enrollments"
 
# class EnrollmentForm(forms.ModelForm):
#     class Meta:
#         model = Enrollment
#         fields= ('fk_student','fk_course','enrollmentDate')
#         widgets = {
#             'fk_student': forms.SelectMultiple(attrs={'class': 'multiple-select-dropdown'}),
#         }      

 

# Syllabus models here.

class Syllabus(models.Model):
    syllabusTitle = models.CharField(max_length=100)
    fk_course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name="Course")
    topic = models.TextField()
    chapters = models.CharField(max_length=100,null=True)
    class Meta:
        verbose_name_plural = "Syllabus"
    def __str__(self):
        return self.syllabusTitle


# Content Model here.

class Content(models.Model):
    fk_syllabus = models.ForeignKey(Syllabus, on_delete=models.CASCADE, verbose_name="Syllabus")
    contentTitle = models.CharField(max_length=150,null=True)
    description = models.TextField()
    fk_intructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, verbose_name="Instructor")
    content_url = models.URLField(max_length=200,null=True)
    uploadDate = models.DateField(null=False)
    video = models.FileField(null=True, blank=True, upload_to="video", default=1)
    class Meta:
        verbose_name_plural = "Content"
    def __str__(self):
        return self.contentTitle
 

# Material Model here.

class Material(models.Model):
    materialTitle = models.CharField(max_length=100)
    description = models.TextField()
    fk_content = models.ForeignKey(Content, on_delete=models.CASCADE, verbose_name="content")
    uploadDate = models.DateField(null=False)
    file = models.FileField(null=True, blank=True, upload_to="file", default=1)
    # fileLocation = models.CharField(max_length=200)
    class Meta:
        verbose_name_plural = "Material"

 

# FAQ Model here.

class Faq(models.Model):
    questions = models.TextField()
    answer = models.TextField()
    fk_course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name="Course")
    fk_student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="Student")
    class Meta:
        verbose_name_plural = "Faq"

 

# ClassSchedule Model here

class ClassSchedule(models.Model):
    classTitle = models.CharField(max_length=150)
    description = models.CharField(max_length=150)
    fk_instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, verbose_name="Instructor")
    fk_course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name="Course")
    classDate = models.DateField()
    classTime = models.TimeField()
    duration = models.DurationField()
    class Meta:
        verbose_name_plural = "Class Schedule"

 
    

# QuizQAndA Model here.

# class QuizQAndA(models.Model):

#     quizQuestion = models.CharField(max_length=200)

#     quizAnswer = models.CharField(max_length=20)

#     optionA = models.CharField(max_length=200)

#     optionB = models.CharField(max_length=200)

#     optionC = models.CharField(max_length=200)

#     class Meta:

#         verbose_name_plural = "QuizQandA"
 

#     def __str__(self):

#         return self.quizAnswer

 

# Quizes Model here.

class Quizes(models.Model):
    title = models.CharField(max_length=100)
    fk_course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name="Coure")
    fk_instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE, verbose_name="Intructor")
    fk_student = models.ForeignKey(Student, on_delete=models.CASCADE, verbose_name="Student",null=True)
    quiz_url = models.URLField(max_length=200,null=True)
    class Meta:
        verbose_name_plural = "Quizes"