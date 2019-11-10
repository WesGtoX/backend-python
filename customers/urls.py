from django.contrib import admin
from django.urls import path, include
from customers.views import CustomersViewSet, UsersViewSet
from rest_framework import routers


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'customers', CustomersViewSet)
router.register(r'user', UsersViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('api/v1/customers/<pk:id>', include(router.urls)),
]
