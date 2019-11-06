from rest_framework import serializers
from .models import Client


# Serializers define the API representation.
class ClientSerializer(serializers.ModelSerializer):

    class Meta:
        model = Client
        fields = ['name', 'email', 'phone', 'cep', 'number', 'complement', 'cpf']
