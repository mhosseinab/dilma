
from django.db.models import Q
from django_filters import rest_framework as filters
from .models import User

class UserFilter(filters.FilterSet):
  name = filters.CharFilter(method='search_name')
  o = filters.OrderingFilter(
    fields=(
      ('is_active', 'is_active'),
      ('role', 'role'),
      ('date_joined', 'date_joined'),
      ('last_login', 'last_login'),
    ),
  )
  
  def search_name(self, queryset, name, value):
    return queryset.filter( Q(first_name__icontains=value) | Q(last_name__icontains=value) )
  
  class Meta:
    model = User
    fields  = ['id', 'uid', 'mobile', 'name']
