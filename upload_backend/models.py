# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

# Creates a file table:
class FileUpload(models.Model):

    filename = models.CharField(max_length=250)
    file = models.FileField(upload_to='input_files/')
    #uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.filename




'''
class Test(models.Model):
    name = models.CharField(max_length=250)
#we can edit the DB using the django admin:
#we use python manage.py createsuperuser to create the admin user
'''