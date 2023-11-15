from django.shortcuts import render
from . import serializers
from . import models
from rest_framework import generics

from django.http import JsonResponse,HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail


import smtplib
# from email.mime.multipart import MIMEMultipart
# from email.mime.text import MIMEText
from django.core.mail import EmailMessage
from email.message import EmailMessage
from rest_framework import status
from rest_framework.response import Response
# from rest_framework.views import APIView



# Create your views here.
    
class IntructorList(generics.ListCreateAPIView):
    queryset = models.Instructor.objects.all()
    serializer_class = serializers.InstructorSerializer

class InstructorDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Instructor.objects.all()
    serializer_class = serializers.InstructorSerializer
    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        serializers = self.get_serializer(instance, data=request.data, partial=partial)
        serializers.is_valid(raise_exception=True)
        self.perform_update(serializers)
        return Response(serializers.data)
 
    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

# for student
class StudentList(generics.ListCreateAPIView):
    queryset = models.Student.objects.all()
    serializer_class = serializers.StudentSerializer

class StudentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Student.objects.all()
    serializer_class = serializers.StudentSerializer

# for Category serializers
class CategoryList(generics.ListCreateAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

class CategoryDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Category.objects.all()
    serializer_class = serializers.CategorySerializer

# Views for Course Model
class CourseList(generics.ListCreateAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer

class CourseDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Course.objects.all()
    serializer_class = serializers.CourseSerializer

# Views for Enrosllments Model
class EnrollmentList(generics.ListCreateAPIView):
    queryset = models.Enrollment.objects.all()
    serializer_class = serializers.EnrollmentSerializer

class EnrollmentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Enrollment.objects.all()
    serializer_class = serializers.EnrollmentSerializer

# Views for Syllabus
class SyllabusList(generics.ListCreateAPIView):
    queryset = models.Syllabus.objects.all()
    serializer_class = serializers.SyllabusSerializer

class SyllabusDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Syllabus.objects.all()
    serializer_class = serializers.SyllabusSerializer

# Views for Content
class ContentList(generics.ListCreateAPIView):
    queryset = models.Content.objects.all()
    serializer_class = serializers.ContentSerializer

class ContentDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Content.objects.all()
    serializer_class = serializers.ContentSerializer

# Views for Materials
class MaterialList(generics.ListCreateAPIView):
    queryset = models.Material.objects.all()
    serializer_class = serializers.MaterialSerializer

class MaterialDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Material.objects.all()
    serializer_class = serializers.MaterialSerializer

# Views for Faq
class FaqList(generics.ListCreateAPIView):
    queryset = models.Faq.objects.all()
    serializer_class = serializers.FaqSerialzer

class FaqDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Faq.objects.all()
    serializer_class = serializers.FaqSerialzer

# Views for ClassSchedule
class ClassScheduleList(generics.ListCreateAPIView):
    queryset = models.ClassSchedule.objects.all()
    serializer_class = serializers.ClassScheduleSerializer

class ClassScheduleDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.ClassSchedule.objects.all()
    serializer_class = serializers.ClassScheduleSerializer
   
# Views for QuizQAndA
# class QuizesList(generics.ListCreateAPIView):
#     queryset = models.Quizes.objects.all()
#     serializer_class = serializers.QuizesSerializer

class QuizesDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Quizes.objects.all()
    serializer_class = serializers.QuizesSerializer

# specific courses in a category
class CategoryCoursesList(generics.ListCreateAPIView):
    serializer_class = serializers.CourseSerializer

    def get_queryset(self):
        category_id=self.kwargs['category_id']
        categoryId=models.Category.objects.get(pk=category_id)
        return models.Course.objects.filter(fk_category=categoryId)
    
    
class CategoryCoursesDetail(generics.ListCreateAPIView):
    serializer_class = serializers.CourseSerializer

    def get_queryset(self):
        id=self.kwargs['id']
        return models.Course.objects.filter(id=id)

class syllabusDetail(generics.ListCreateAPIView):
    serializer_class = serializers.SyllabusSerializer

    def get_queryset(self):
        syllabus_id=self.kwargs['syllabus_id']
        return models.Syllabus.objects.filter(id=syllabus_id)    

@csrf_exempt
def login(request):
    email = request.POST.get('email', '')
    password = request.POST.get('password', '')

    # Check if the user is an Instructor
    instructor_data = models.Instructor.objects.filter(email=email, password=password)
    authenticated_instructor = instructor_data.first()
    if instructor_data.exists():    
        return JsonResponse({'user_type': 'instructor','teacher_id': authenticated_instructor.id})

    # Check if the user is a Student
    student_data = models.Student.objects.filter(email=email, password=password)
    authenticated_student = student_data.first()
    if student_data.exists():
        return JsonResponse({'user_type': 'student','student_id': authenticated_student.id})

    return JsonResponse({'user_type': 'none'})

# @csrf_exempt
# def studentForgetPassword(request):
#  email=request.POST.get('email')
#  verify=models.Student.objects.filter(email=email).first()
#  verify1=models.Instructor.objects.filter(email=email).first()
#  if verify:
#      link=f"http://localhost:3000/student-change-password/{verify.id}/" 
#      send_mail(
#          'Verify Account',
#          'Please verify your account',
#          'lamarisa_s@pursuitsoftware.biz',
#          [email],
#          fail_silently=False,
#          html_message=f'<p> Your OTP is</p><p>{link}</p>'
#      )
#      return JsonResponse({'user_type': 'student'})
#  else:
#      return JsonResponse({'msg': 'Invalid email'})

# @csrf_exempt
# def forgetPassword(request):
#     email = request.POST.get('email')
#     verify_student = models.Student.objects.filter(email=email).first()
#     verify_instructor = models.Instructor.objects.filter(email=email).first()
    
#     if verify_student:
#         link = f"http://localhost:3000/change-password/student/{verify_student.id}/"
#         user_type = 'student'
#     elif verify_instructor:
#         link = f"http://localhost:3000/change-password/instructor/{verify_instructor.id}/"
#         user_type = 'instructor'
#     else:
#         return JsonResponse({'msg': 'Invalid email'})
    
#     send_mail(
#         'Verify Account',
#         'Please verify your account',
#         'lamarisa_s@pursuitsoftware.biz',
#         [email],
#         fail_silently=False,
#         html_message=f'<p> Your OTP is</p><p>{link}</p>'
#     )
    
#     return JsonResponse({'user_type': user_type})

#Gray123sophia
@csrf_exempt
def forgetPassword(request):
    email = request.POST.get('email')
    verify_student = models.Student.objects.filter(email=email).first()
    verify_instructor = models.Instructor.objects.filter(email=email).first()
    
    if verify_student:
        link = f"http://localhost:3000/change-password/student/{verify_student.id}/"
        user_type = 'student'
    elif verify_instructor:
        link = f"http://localhost:3000/change-password/instructor/{verify_instructor.id}/"
        user_type = 'instructor'
    else:
        return JsonResponse({'msg': 'Invalid email'})
    
    subject = 'Verify Account'
    body = f'Please verify your account by clicking on the following link: {link}'
    from_email = 'graysophia507@gmail.com'
    recipient_list = [email]

    try:

        with smtplib.SMTP('smtp.gmail.com', 587) as server:
            server.starttls()
            server.login('graysophia507@gmail.com', 'qsmlbbhwehibyfvy')

        # Using Django's built-in EmailMessage to send the email
        # msg = EmailMessage(subject, body, from_email, recipient_list)
        # msg.content_subtype = "html"  # Set the content type to HTML
        # msg.send()

            msg = EmailMessage()
            msg.set_content(body)
            msg['Subject'] = subject
            msg['From'] = from_email
            msg['To'] = ', '.join(recipient_list)

            server.send_message(msg)

        return JsonResponse({'user_type': user_type})

    except Exception as e:
        return JsonResponse({'msg': 'Error sending email','message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def changePassword(request, user_type, user_id):
    password = request.POST.get('password')
    
    if user_type == 'student':
        verify = models.Student.objects.filter(id=user_id).first()
    elif user_type == 'instructor':
        verify = models.Instructor.objects.filter(id=user_id).first()
    else:
        return JsonResponse({'msg': 'Invalid user type'})
    
    if verify:
        if user_type == 'student':
            models.Student.objects.filter(id=user_id).update(password=password)
        elif user_type == 'instructor':
            models.Instructor.objects.filter(id=user_id).update(password=password)
        
        return JsonResponse({'user_type': user_type, 'msg': 'Password has been changed'})
    else:
        return JsonResponse({'msg': 'Some error occurred'})


@csrf_exempt
def studentResetPassword(request,student_id):
 password=request.POST.get('password')
 verify=models.Student.objects.filter(id=student_id).first()
 if verify:
    models.Student.objects.filter(id=student_id).update(password=password)
    return JsonResponse({'user_type': 'student','msg': 'Password has been changed'})
 else:
     return JsonResponse({'msg': 'Some error occured'})
 

@csrf_exempt
def teacherResetPassword(request,teacher_id):
 password=request.POST.get('password')
 verify=models.Instructor.objects.filter(id=teacher_id).first()
 if verify:
    models.Instructor.objects.filter(id=teacher_id).update(password=password)
    return JsonResponse({'user_type': 'instructor','msg': 'Password has been changed'})
 else:
     return JsonResponse({'msg': 'Some error occured'})