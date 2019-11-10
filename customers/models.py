from django.db import models


class Customers(models.Model):
    name = models.CharField('Nome', max_length=200)
    cpf = models.CharField('CPF', max_length=11, unique=True)
    phone = models.CharField('Telefone', max_length=15)
    email = models.EmailField('E-mail', max_length=100)

    cep = models.CharField('CEP', max_length=8)
    address = models.CharField('Endereço', max_length=200, default=None)
    number = models.IntegerField('Número', blank=True)
    complement = models.CharField(max_length=50, blank=True)
    neighborhood = models.CharField('Bairro', max_length=100, default=None)
    city = models.CharField('Cidade', max_length=100, default=None)
    uf = models.CharField('UF', max_length=2, default=None)


    def __str__(self):
        return self.name
