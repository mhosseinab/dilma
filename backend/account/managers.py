from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _
from re import match as re_match


class CustomUserManager(BaseUserManager):
    """
    Custom user model where the email address is the unique identifier
    and has an is_admin field to allow access to the admin app 
    """
    # IRANIAN_mobile_REGEX_PATTERN = "^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$"
    # IRANIAN_mobile_REGEX_PATTERN = "^09(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$"
    IRANIAN_mobile_REGEX_PATTERN = "^(98|09)\d{9,10}$"

    def is_valid_iranian_number(self, mobile):
        match = re_match(self.IRANIAN_mobile_REGEX_PATTERN, mobile)
        if match:
            return True
        else:
            return False

    def create_user(self, mobile, password, **extra_fields):
        if not mobile:
            raise ValueError(_("The phone number must be set"))

        if not self.is_valid_iranian_number(mobile):
            raise ValueError(_("Phone number is not valid"))

        user = self.model(mobile=mobile, **extra_fields)
        
        if password:
            user.set_password(password)
        
        user.save()
        return user

    def create_superuser(self, mobile, password, **extra_fields):
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('role', self.model.ADMIN)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_staff', True)

        if extra_fields.get('role') != self.model.ADMIN:
            raise ValueError('Superuser must have role of Global Admin')
        return self.create_user(mobile, password, **extra_fields)
