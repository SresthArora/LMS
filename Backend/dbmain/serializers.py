from rest_framework import serializers
from . import models

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Instructor
        fields='__all__'
        #fields=['id', 'firstName', 'lastName', 'email', 'password', 'dob', 'address', 'contactNumber', 'verificationStatus']


# Serializer for Student
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Student
        fields='__all__'
        #fields = ['id', 'firstName', 'lastName', 'email', 'password', 'dob', 'address', 'contactNumber', 'verificationStatus']

# Serializer for Category
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = ['id', 'categoryName', 'description']

# Serializer for Course
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Course
        fields = ['id', 'courseName', 'description', 'fk_category', 'fk_intructor', 'enrollmentCapacity', 'startDate', 'endDate']
        

# Serializer for Enrollments
class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Enrollment
        fields = ['id', 'fk_student', 'fk_course', 'enrollmentDate']
        

# Serializer for Syllabus
class SyllabusSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Syllabus
        fields = ['id', 'syllabusTitle', 'fk_course', 'topic', 'chapters']

# Serializer for Content
class ContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Content
        fields = '__all__'

# Serializer for Material
class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Material
        fields = ['id', 'materialTitle', 'description', 'fk_content', 'uploadDate']

# Serializer for Faq
class FaqSerialzer(serializers.ModelSerializer):
    class Meta:
        model = models.Faq
        fields = ['id', 'questions', 'answer', 'fk_course', 'fk_student']

# Serializer for ClassSchedule
class ClassScheduleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ClassSchedule
        fields = ['id', 'classTitle', 'description', 'fk_nstructor', 'fk_course', 'classDate', 'classTime', 'duration']

# Serailizer for Quizes
class QuizesSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Quizes
        fields = ['id', 'fk_quizQAndAID', 'title', 'maxScore', 'userScore', 'fk_course', 'fk_instructor', 'time', 'startDate', 'endDate']

