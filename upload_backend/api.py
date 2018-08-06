from rest_framework import viewsets, permissions

from models import FileUpload
from serializers import FileUploadSerializer


class FileUploadViewSet(viewsets.ModelViewSet):
    queryset = FileUpload.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = FileUploadSerializer