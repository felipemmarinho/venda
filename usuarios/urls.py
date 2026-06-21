from django.urls import path
from . import views

urlpatterns = [
    path('usuario/',views.cadastro_usuario,name='usuarios'),
]