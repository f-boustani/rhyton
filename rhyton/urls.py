from django.conf.urls import patterns, include, url
from django.conf import settings
from views import *
# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
	(r'^$', home),
        (r'^contact_us/$', contact_us),
        (r'^projects/$', projects),
        (r'^showRoom/$', showRoom),)
