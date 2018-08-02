# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from forms import FileUploadForm
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
def uploadFile(request):
    if request.method == 'POST':
        #print request.FILES['file'].name
   
        form = FileUploadForm(request.POST, request.FILES)

        if form.is_valid():
            form.save()
            print 'upload successful'


    else:
        form = FileUploadForm()
        print 'upload unsuccessful'

    
    return render(request, '../templates/index.html', {
        'form': form
    })