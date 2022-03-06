from django.shortcuts import render
from django.http import HttpResponse

 # Create your views here.
def heroku(request):
    return render(request,'heroku.html')
