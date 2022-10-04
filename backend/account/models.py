import string
from uuid import uuid4
from datetime import timedelta

from django.db import models
from django.contrib.auth.models import PermissionsMixin
from django.contrib.auth.base_user import AbstractBaseUser
from django.utils.translation import gettext_lazy as _
from django.utils import timezone
from django.utils.crypto import get_random_string

from .managers import CustomUserManager

class User(AbstractBaseUser, PermissionsMixin):
    ADMIN = 1
    MANAGER = 2
    CUSTOMER = 3

    ROLE_CHOICES = (
        (ADMIN, 'Admin'),
        (MANAGER, 'Manager'),
        (CUSTOMER, 'Customer')
    )

    uid = models.UUIDField(unique=True, db_index=True, editable=False, default=uuid4, verbose_name='uuid')
    email = models.EmailField(unique=True, db_index=True, null=True, default=None)
    mobile = models.CharField(max_length=12, unique=True, db_index=True)
    role = models.PositiveSmallIntegerField(choices=ROLE_CHOICES, default=CUSTOMER)
    first_name = models.CharField(_('first name'), max_length=150, blank=True)
    last_name = models.CharField(_('last name'), max_length=150, blank=True)
    is_staff = models.BooleanField(
        _('staff status'),
        default=False,
        help_text=_('Designates whether the user can log into this admin site.'),
    )
    is_active = models.BooleanField(
        _('active'),
        default=True,
        help_text=_(
            'Designates whether this user should be treated as active. '
            'Unselect this instead of deleting accounts.'
        ),
    )
    date_joined = models.DateTimeField(_('date joined'), default=timezone.now)

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'mobile'
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.mobile

class AuthToken(models.Model):
    EXP_IN_MINUTES = 5
    MAX_FAILED_ATTEMPTS = 5
    uid = models.UUIDField(primary_key=True, default=uuid4, editable=False, unique=True, db_index=True)
    user = models.ForeignKey(User, related_name=None, on_delete=models.CASCADE)
    token1 = models.CharField(max_length=6, null=True)
    token2 = models.CharField(max_length=6, null=True)
    failed_attempts = models.IntegerField(default=0)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    
    @classmethod
    def generate_numeric_token(cls, length=5) -> str:
        """
        Generate a random string of numbers.
        We use this formatting to allow leading 0s.
        """
        return get_random_string(length=length, allowed_chars=string.digits)

    @property
    def is_expired(self) -> bool:
        return self.updatedAt < timezone.now()  - timedelta(minutes=self.EXP_IN_MINUTES)
    
    @property
    def expires_on(self) -> bool:
        return self.updatedAt + timedelta(minutes=self.EXP_IN_MINUTES)
    
    def is_valid(self, ref, txt) -> bool:
        if not ref or self.is_expired or self.failed_attempts > self.MAX_FAILED_ATTEMPTS:
            return False
        if ref == txt:
            self.failed_attempts = 0
            self.save()
            return True
            
        self.failed_attempts = self.failed_attempts + 1
        self.save()
        return False

    
    