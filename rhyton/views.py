from django.http import HttpResponse
from django.shortcuts import render_to_response
from django.template import Context
import datetime

def home(request):
	return render_to_response('home.html',{})



def contact_us(request):
	return render_to_response('contact_us.html',{})


def projects(request):
	return render_to_response('projects.html',{})

def showRoom(request):
	return render_to_response('showRoom.html',{})
