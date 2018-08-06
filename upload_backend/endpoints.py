from django.conf.urls import include, url
from rest_framework import routers

from .api import FileUploadViewSet

router = routers.DefaultRouter()
router.register('file_upload', FileUploadViewSet)

#basically go to the respective view set depending on the path after api/ !!
urlpatterns = [
    url("^", include(router.urls)),
]