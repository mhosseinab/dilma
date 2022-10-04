import logging
from rest_framework import serializers
from .models import Discount, Language, Upload, Order, OrderItem, DocCategory, DocType
from account.serializers import UserSerializer

logger = logging.getLogger(__name__)

class UploadSerializer(serializers.ModelSerializer):

    def validate(self, data):
        print(data)
        request = self.context.get('request')
        if not request:
            raise serializers.ValidationError("context integrity failed")
        # if not request.user.is_authenticated:
        #     raise serializers.ValidationError("user not authenticated")
        itemUUID = data.get('ext_id')
        try:
            orderItem = OrderItem.objects.get(uuid=itemUUID)
            #TO DO: check order item owner
        except Exception as e:
            logger.error(e)
            raise serializers.ValidationError("item integrity failed")
        return {
            **data, 
            'owner': request.user if request.user.is_authenticated else None, 
            'item': orderItem,
        }

    
    def create(self, data):
        del data['item']
        upload = Upload.objects.create(**data)
        return upload
    class Meta:
        model = Upload
        fields = ['id', 'file', 'ext_id']


class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'

class DiscountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Discount
        fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
    status = serializers.CharField(source='get_status_display', read_only=True)

    def to_representation(self, instance: OrderItem):
        response = super().to_representation(instance)
        response['upload'] = UploadSerializer(instance=instance.upload, context=self.context, read_only=True).data
        response['stamp'] = instance.get_stamp_display()
        response['pickup'] = instance.get_pickup_display()
        return response

    class Meta:
        model = OrderItem
        exclude = ['updatedAt', 'createdAt','discount','discount_amount']


class OrderSerializer(serializers.ModelSerializer):
    uuid = serializers.UUIDField(read_only=True)
    customer = UserSerializer(read_only=True)
    items = OrderItemSerializer(source='orderitem_set', many=True)
    status = serializers.CharField(source='get_status_display', read_only=True)

    def to_representation(self, instance:Order):
        response = super().to_representation(instance)
        response['to_language'] = LanguageSerializer(instance=instance.to_language).data
        response['from_language'] = LanguageSerializer(instance=instance.from_language).data
        response['delivery_option'] = instance.get_delivery_option_display()
        response['type'] = instance.get_type_display()
        return response

    def create(self, data):
        request = self.context.get('request')
        if not request:
            raise serializers.ValidationError("context integrity failed")
        customer = request.user if request.user.is_authenticated else None
        order = Order.objects.create(
            from_language=data.get('from_language'), 
            to_language=data.get('to_language'), 
            type=data.get('type'), 
            delivery_option=data.get('delivery_option'),
            status = Order.STATUS_NEW,
            customer=customer
        )

        for item in data.get('orderitem_set',[]):
            print(item)
            order_item = OrderItemSerializer(data={
                **item, 
                'doc_type':item.get('doc_type',{'pk':0}).pk, 
                'order':order.pk
            })
            order_item.is_valid(raise_exception=True)
            order_item:OrderItem = order_item.save()
        return order

    class Meta:
        model = Order
        fields = ['uuid', 'customer', 'from_language', 'to_language', 'type', 'status', 'delivery_option', 'items']



class DocTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = DocType
        exclude = ['updatedAt', 'createdAt']

class DocCategorySerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(many=True, queryset=DocType.objects.all())

    class Meta:
        model = DocCategory
        fields = '__all__'
