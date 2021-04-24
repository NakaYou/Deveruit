from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.conf import settings

def upload_path(instance, filename):
    ext = filename.split('.')[-1]
    return '/'.join(['image', str(instance.created_user.id)+str(".")+str(ext)])

class UserManager(BaseUserManager):

    def create_user(self, email, password=None, **extra_fields):

        if not email:
            raise ValueError('Please enter email')

        user = self.model(email=self.normalize_email(email), **extra_fields)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_staff = True
        user.is_superuser = True
        user.save(using= self._db)

        return user

class User(AbstractBaseUser, PermissionsMixin):

    email = models.EmailField(max_length=50, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email


class Recruitment(models.Model):
    created_user = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='created_user',
        on_delete=models.CASCADE
    )
    img = models.ImageField(blank=True, null=True, upload_to=upload_path)
    detail = models.TextField()
    approval_msg = models.CharField(max_length=200)
    refusal_msg = models.CharField(max_length=200)
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.created_user

class Request(models.Model):
    applicant = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='applicant',
        on_delete=models.CASCADE
    )
    recruiter = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='recruiter',
        on_delete=models.CASCADE
    )
    is_approved = models.BooleanField(default=False)
    is_processed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        unique_together = (('applicant', 'recruiter'),)

    def __str__(self):
        return str(self.applicant) + '----->' + str(self.recruiter)

class Message(models.Model):
    sender = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='sender',
        on_delete=models.CASCADE
    )
    receiver = models.ForeignKey(
        settings.AUTH_USER_MODEL, related_name='receiver',
        on_delete=models.CASCADE
    )
    is_read = models.BooleanField(default=False)
    recruitment = models.ForeignKey(Recruitment, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)    

    def __str__(self):
        return str(self.sender)
