from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('customers.urls')),
    path('auth/', obtain_auth_token),
    path('api-auth/', include('rest_framework.urls')),
]
