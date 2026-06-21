from django.shortcuts import render

# Create your views here.
def cadastro_usuario(request):
    return render(request,'usuarios.html'),