from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView
from upload_backend import endpoints

urlpatterns = [

    url(r'^admin/', admin.site.urls),
    #url(r'^uploadFile/', include('upload_backend.urls')),
    url(r'^api/', include(endpoints)),
    #here im using regex to say that route to react with any requeted URL EXCEPT!! admin and uploadFile.
    url(r'^(?!admin/)(?!api/).*', TemplateView.as_view(template_name="index.html")),

]

