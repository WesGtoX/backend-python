from django.contrib import admin
from .models import Customers


# Adding Client to show in admin page.
admin.site.register(Customers)
