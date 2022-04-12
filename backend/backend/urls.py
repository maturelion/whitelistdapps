from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('only-admin-can-see/', admin.site.urls),
    path('', include("api.urls"))
]
