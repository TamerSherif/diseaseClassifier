from django.conf.urls import url
from django.contrib import admin
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    #here im using regex to say that route to react with any requeted URL EXCEPT!! admin.
    url(r'^(?!admin).*', TemplateView.as_view(template_name="index.html")),
]

