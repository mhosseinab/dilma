
from django_filters import rest_framework as filters
from .models import DocumentCategory, DocumentType, Order, OrderItem

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
    fields  = ['id', 'type', 'status', 'customer']

class OrderItemFilter(filters.FilterSet):
  o = filters.OrderingFilter(
    fields=(
      ('order', 'order'),
      ('document_type', 'type'),
      ('type', 'type'),
    ),
  )
  class Meta:
    model = OrderItem
    fields  = ['order', 'document_type', 'file', 'document_type']

class DocumentCategoryFilter(filters.FilterSet):
  class Meta:
    model = DocumentCategory
    fields  = ['translation_type',]

class DocumentTypeFilter(filters.FilterSet):
  class Meta:
    model = DocumentType
    fields  = ['category',]
