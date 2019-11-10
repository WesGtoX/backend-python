from django.db import models
from phonenumber_field.modelfields import PhoneNumberField
from localflavor.br.models import BRCPFField


class Customers(models.Model):
    name = models.CharField('Nome', max_length=200)
    cpf = BRCPFField('CPF', max_length=11, unique=True)
    phone = PhoneNumberField('Telefone', max_length=15)
    email = models.EmailField('E-mail', max_length=100, unique=True)

    cep = models.CharField('CEP', max_length=8)
    address = models.CharField('Endereço', max_length=200, default='')
    number = models.IntegerField('Número', null=True, blank=True)
    complement = models.CharField(max_length=50, blank=True)
    neighborhood = models.CharField('Bairro', max_length=100, default='')
    city = models.CharField('Cidade', max_length=100, default='')
    uf = models.CharField('UF', max_length=2, default='')


    def __str__(self):
        return self.name
