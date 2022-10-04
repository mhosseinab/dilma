
from django_filters import rest_framework as filters
from .models import DocCategory, DocType,Language, Order, OrderItem

class OrderFilter(filters.FilterSet):
  o = filters.OrderingFilter(
    fields=(
      ('updatedAt', 'updatedAt'),
      ('createdAt', 'createdAt'),
      ('customer', 'customer'),
      ('status', 'status'),
      ('type', 'type'),
    ),
  )
  class Meta:
    model = Order
    fields  = '__all__'

class OrderItemFilter(filters.FilterSet):
  o = filters.OrderingFilter(
    fields=(
      ('order', 'order'),
      ('doc_type', 'type'),
      ('stamp', 'stamp'),
      ('pickup', 'pickup'),
      ('createdAt', 'createdAt'),
      ('updatedAt', 'updatedAt'),
    ),
  )
  class Meta:
    model = OrderItem
    fields  = ['id', 'order', 'doc_type', 'asignee', 'status']

class DocCategoryFilter(filters.FilterSet):
  class Meta:
    model = DocCategory
    fields  = '__all__'

class DocTypeFilter(filters.FilterSet):
  class Meta:
    model = DocType
    fields  = '__all__'

class LanguageFilter(filters.FilterSet):
  class Meta:
    model = Language
    fields  = '__all__'
