from django.urls import path
from .views import index,principal
from core import views

urlpatterns = [
    path('', index, name='index'),
    path('principal/',views.principal,name='principal'),
    
    
]