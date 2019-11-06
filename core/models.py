from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=15)
    cep = models.CharField(max_length=8)
    number = models.IntegerField()
    complement = models.CharField(max_length=50)
    cpf = models.CharField(max_length=11)

    def __str__(self):
        return self.name
