from logging import getLogger
from typing import List

from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin, RetrieveModelMixin, DestroyModelMixin, UpdateModelMixin, CreateModelMixin
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

from account.models import User
from main.filters import DocumentCategoryFilter, DocumentTypeFilter, OrderFilter, OrderItemFilter
from main.models import DocumentType, Language, DocumentCategory, Order, OrderItem
from main.serializers import DocumentCategorySerializer, DocumentTypeSerializer, OrderItemSerializer, OrderSerializer
from account.permissions import IsStaffUser, ReadOnly

# Get an instance of a logger
logger = getLogger(__name__)

class GenericView(ListModelMixin,
                  RetrieveModelMixin,
                  CreateModelMixin,
                  DestroyModelMixin,
                  UpdateModelMixin,
                  GenericAPIView):
    permission_classes = [IsStaffUser | ReadOnly]
    def options(self, request, *args, **kwargs):
        if self.metadata_class is None:
            return self.http_method_not_allowed(request, *args, **kwargs)
        pk = kwargs.get('pk')
        if not pk:
            return Response(status=status.HTTP_204_NO_CONTENT)
        data = self.metadata_class().determine_metadata(request, self)
        return Response(data, status=status.HTTP_200_OK)

    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if pk:
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if not pk:
            return self.http_method_not_allowed(request, *args, **kwargs)
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if not pk:
            return self.http_method_not_allowed(request, *args, **kwargs)
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if not pk:
            return self.http_method_not_allowed(request, *args, **kwargs)
        return self.destroy(request, *args, **kwargs)

class OrderView(ListModelMixin, RetrieveModelMixin, GenericAPIView, DestroyModelMixin, UpdateModelMixin, ):
    permission_classes = (IsAuthenticated,)
    serializer_class = OrderSerializer
    filterset_class = OrderFilter
    
    def is_modify_allowed(self, user:User):
        return self.request.user.role in [User.ADMIN, User.MANAGER]
        # return True

    def get_queryset(self):
        return Order.objects.all() if self.is_modify_allowed(self.request.user) else Order.objects.filter(customer=self.request.user)
        
    def get_order_props(self, order_type:str):
        ORDER_TYPE = {
            'unofficial_translation': Order.TRANSLATION,
            'official_translation': Order.OFFICIAL_TRANSLATION,
        }
        DOC_TYPE = {
            'unofficial_translation': DocumentCategory.NONOFFICIAL,
            'official_translation': DocumentCategory.OFFICIAL,
        }

        _order_type = ORDER_TYPE.get(order_type)
        _document_type = DOC_TYPE.get(order_type)
        return _order_type, _document_type

    def rollback_order_create(self, order:Order, items:List[OrderItem]):
        for item in items:
            try:
                item.delete()
            except:
                pass
        
        order.delete()

    def post(self, request):
        order_type , document_type = self.get_order_props(request.data.get("order_type"))
        
        if order_type is None or document_type is None:
            return Response({"message": "response type is not supported"}, status=status.HTTP_400_BAD_REQUEST)

        order = Order.objects.create(type=order_type, status=Order.NEW, customer=request.user)
        items = []
        try:
            for item in request.data.get("items"):
                print({**item, 'order':order.pk})
                _serializer = OrderItemSerializer(data={**item, 'document_type':document_type, 'order':order.pk}, context={'request': request,})
                _serializer.is_valid(raise_exception=True)
                item = _serializer.save()
                print(_serializer.data)
                items.append(item)
                print(items)
        except Exception as e:
            logger.error(e)
            self.rollback_order_create(order, items)
            return Response({"error": "item integrity failed"}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"order": OrderSerializer(instance=order).data})

    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if pk:
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)
    
    def patch(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if not pk or not self.is_modify_allowed(request.user):
            return self.http_method_not_allowed(request, *args, **kwargs)
        return self.partial_update(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if not pk or not self.is_modify_allowed(request.user):
            return self.http_method_not_allowed(request, *args, **kwargs)
        return self.destroy(request, *args, **kwargs)

class OrderItemView(ListModelMixin, GenericAPIView, DestroyModelMixin, RetrieveModelMixin):
    permission_classes = (IsAuthenticated,)
    serializer_class = OrderItemSerializer
    filterset_class = OrderItemFilter
    
    def get_queryset(self):
        queryset = OrderItem.objects.all().prefetch_related('order', 'file', 'document_type')
        return queryset \
            if self.is_modify_allowed(self.request.user) \
            else queryset.filter(order__customer=self.request.user)

    def is_modify_allowed(self, user:User):
        return self.request.user.role in [User.ADMIN, User.MANAGER]
        # return True
    
    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if pk:
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)
    
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if not pk or not self.is_modify_allowed(request.user):
            return self.http_method_not_allowed(request, *args, **kwargs)
        return self.destroy(request, *args, **kwargs)

class DocumentCategoryView(GenericView):
    serializer_class = DocumentCategorySerializer
    filterset_class = DocumentCategoryFilter
    queryset = DocumentCategory.objects.all()
    permission_classes = [IsStaffUser | ReadOnly]

class DocumentTypeView(GenericView):
    serializer_class = DocumentTypeSerializer
    filterset_class = DocumentTypeFilter
    queryset = DocumentType.objects.all().prefetch_related('category')
    permission_classes = [IsStaffUser | ReadOnly]

