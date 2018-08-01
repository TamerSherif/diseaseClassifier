# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

# Creates a file table:
class FileUpload(models.Model):

    name = models.CharField(max_length=250, blank=True)
    file = models.FileField(upload_to='input_files/')
    uploaded_at = models.DateTimeField(auto_now_add=True)
    #uploaded_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name



