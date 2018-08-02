from django import forms
from models import FileUpload

class FileUploadForm(forms.ModelForm):

    class Meta:
        #here we are saying that the input form should contain two main attributes: a 'file' and a 'name'.
        #these attributes are defined when we upload the form from the react side (where we declare what the 'file' and 'name')
        #we are also saying that we are using the FileUpload model 
        model = FileUpload
        fields = ('name', 'file')