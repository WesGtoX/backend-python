from django.shortcuts import render
from rest_framework import viewsets
from .models import Client
from .serializers import ClientSerializer


# ViewSets define the view behavior.
class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
