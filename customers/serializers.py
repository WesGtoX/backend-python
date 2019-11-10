from rest_framework import serializers
from .models import Customers


# Serializers define the API representation.
class CustomersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customers
        # fields = ['name', 'email', 'phone', 'cep', 'number', 'complement', 'cpf']
        fields = '__all__'