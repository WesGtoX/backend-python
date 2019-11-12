from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Customers
from rest_framework.authtoken.models import Token


# Users serializers to define the API representation.
class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user


# Customers serializers to define the API representation.
class CustomersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Customers
        fields = '__all__'
