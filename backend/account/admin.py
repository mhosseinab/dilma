from django.contrib import admin
from django.utils.translation import gettext, gettext_lazy as _
from django.contrib.auth.admin import UserAdmin as AuthUserAdmin

from .models import *


@admin.register(AuthToken)
class AuthTokenAdmin(admin.ModelAdmin):
  list_display = ('uid', 'user', 'token1')
  raw_id_fields = ['user']
  search_fields = ('uid', 'user__mobile','user__email','user__id',)
  ordering = ('-createdAt',)

@admin.register(User)
class UserAdmin(AuthUserAdmin):
  fieldsets = (
    (None, {
      'fields': ('mobile', 'password', 'uid',),
    }),
    (_('Personal info'), {
      'fields': ('first_name', 'last_name', 'email','role'),
    }),
    (_('Permissions'), {
        'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions'),        
    }),
    (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
  )
  add_fieldsets = (
    (None, {
        'classes': ('wide',),
        'fields': ('mobile', 'password1', 'password2'),
    }),
  )
  readonly_fields=('date_joined','last_login', 'uid')
  list_display = ('id', 'mobile', 'email', 'first_name', 'last_name','role', 'is_staff')
  list_filter = ('is_staff', 'is_superuser','role', 'is_active', 'date_joined', 'last_login', 'groups')
  search_fields = ('id', 'uid', 'mobile', 'first_name', 'last_name', 'email')
  ordering = ('-is_staff','-id',)