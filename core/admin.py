from django.contrib import admin
from .models import Client


# Adding Client to show in admin page.
admin.site.register(Client)
