from django.urls import path
from . import views

urlpatterns = [
    path('instructor/', views.IntructorList.as_view()),
    path('instructor/<int:pk>/', views.InstructorDetails.as_view()),
    path('student/', views.StudentList.as_view()),
    path('student/<int:pk>/', views.StudentDetails.as_view()),
    path('category/', views.CategoryList.as_view()),
    path('category/<int:pk>/', views.CategoryDetails.as_view()),
    path('course/', views.CourseList.as_view()),
    path('course/<int:pk>/', views.CourseDetails.as_view()),
    path('enrollment/', views.EnrollmentList.as_view()),
    path('enrollment/<int:pk>/', views.EnrollmentDetails.as_view()),
    path('syllabus/', views.SyllabusList.as_view()),
    path('syllabus/<int:pk>/', views.SyllabusDetails.as_view()),
    path('content/', views.ContentList.as_view()),
    path('content/<int:pk>/', views.ContentDetails.as_view()),
    path('material/', views.MaterialList.as_view()),
    path('material/<int:pk>/', views.MaterialDetails.as_view()),
    path('faq/', views.FaqList.as_view()),
    path('faq/<int:pk>/', views.FaqDetails.as_view()),
    path('ClassSchedule/', views.ClassScheduleList.as_view()),
    path('ClassSchedule/<int:pk>/', views.ClassScheduleDetails.as_view()),
    # path('quizes/', views.QuizesList.as_view()),
    path('quizes/<int:pk>/', views.QuizesDetails.as_view()),
    # path('login',views.login),
    path('login',views.login)
]