from rest_framework import viewsets
from django.contrib.auth.models import User
from .models import Customers
from .serializers import UsersSerializer, CustomersSerializer


class UsersViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UsersSerializer

# ViewSets define the view behavior.
class CustomersViewSet(viewsets.ModelViewSet):
    queryset = Customers.objects.all()
    serializer_class = CustomersSerializer