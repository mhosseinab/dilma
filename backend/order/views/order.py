from rest_framework import generics, mixins
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from rest_framework import status
from account.models import User

from account.permissions import IsStaffUser
from order.models import DocCategory, DocType, Language, Order, OrderItem
from order.filters import DocCategoryFilter, DocTypeFilter, OrderFilter
from order.serializers import DocCategorySerializer, DocTypeSerializer, LanguageSerializer, OrderSerializer

class GenericView(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  mixins.CreateModelMixin,
                  mixins.DestroyModelMixin,
                  mixins.UpdateModelMixin,
                  generics.GenericAPIView):
    permission_classes = [IsStaffUser]

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

class OrderConfigView(generics.GenericAPIView):
    permission_classes = (AllowAny,)
    
    def get(self, request, *args, **kwargs):
        return Response({
            'languages': LanguageSerializer(instance=Language.objects.all().order_by('name'), many=True, read_only=True).data,
            'doc_types': DocTypeSerializer(instance=DocType.objects.all().order_by('name'), many=True, read_only=True).data,
            'categories': DocCategorySerializer(instance=DocCategory.objects.all().prefetch_related('items').order_by('-priority','name'), many=True, read_only=True).data,
            'order_types': Order.ORDER_TYPE_CHOICES,
            'delivery_options': Order.DELIVERY_CHOICES,
            'delivery_price_base': Order.DELIVERY_PRICE_BASE,
            'delivery_price_ratio': Order.DELIVERY_PRICE_RATIO,
            'stamp_choices': DocType.VERIFICATION_CHOICES,
            'pickup_choices': DocType.PICKUP_CHOICES,
        }, status=status.HTTP_200_OK)

class OrderView(mixins.ListModelMixin,
                mixins.RetrieveModelMixin,
                mixins.CreateModelMixin, 
                generics.GenericAPIView):
    permission_classes = [AllowAny]
    queryset = Order.objects.all().prefetch_related('orderitem_set')
    filterset_class = OrderFilter
    serializer_class = OrderSerializer

    def get_queryset(self):
        return self.queryset \
            if self.is_modify_allowed(self.request.user) \
            else self.queryset.filter(customer=self.request.user)

    def is_modify_allowed(self, user: User):
        return self.request.user.role in [User.ADMIN, User.MANAGER]

    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk')
        if pk:
            return self.retrieve(request, *args, **kwargs)
        return self.list(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class LanguageView(GenericView):
    permission_classes = [IsStaffUser | AllowAny]
    queryset = Language.objects.all()
    serializer_class = LanguageSerializer

class DocTypeView(GenericView):
    permission_classes = [IsStaffUser | AllowAny]
    queryset = DocType.objects.all()
    serializer_class = DocTypeSerializer
    filterset_class = DocTypeFilter

class DocCategoryView(GenericView):
    permission_classes = [IsStaffUser | AllowAny]
    queryset = DocCategory.objects.all()
    serializer_class = DocCategorySerializer
    filterset_class = DocCategoryFilter


