from rest_framework import serializers

from .models import File, OrderItem, Order, DocumentCategory, DocumentType


class FileSerializer(serializers.ModelSerializer):

    def validate(self, data):
        request = self.context.get('request')
        if not request:
            raise serializers.ValidationError("context integrity failed")
        if not request.user.is_authenticated:
            raise serializers.ValidationError("user not authenticated")
        return {
            **data, 'owner': request.user
        }

    class Meta:
        model = File
        fields = ['id', 'file', 'owner']


class OrderItemSerializer(serializers.ModelSerializer):
    
    def validate(self, data):
        request = self.context.get('request')
        if not request:
            raise serializers.ValidationError("context integrity failed")
        if not request.user.is_authenticated:
            raise serializers.ValidationError("user not authenticated")
        
        if data.get('order').customer.pk != request.user.pk:
            raise serializers.ValidationError("user integrity failed")
        return data
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['file'] = FileSerializer(instance=instance.file, context=self.context, read_only=True).data
        return response

    class Meta:
        model = OrderItem
        exclude = ['updatedAt', 'createdAt']


class OrderSerializer(serializers.ModelSerializer):
    items = OrderItemSerializer(read_only=True, many=True)
    
    def validate(self, data):
        request = self.context.get('request')
        if not request:
            raise serializers.ValidationError("context integrity failed")
        if not request.user.is_authenticated:
            raise serializers.ValidationError("user not authenticated")
        
        print(data)

        if 'customer' in data and data.get('customer').pk != request.user.pk:
            raise serializers.ValidationError("user integrity failed")    
        else:
            data['customer'] = request.user
        return data
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['items'] = OrderItemSerializer(instance=instance.orderitem_set, context=self.context, many=True, read_only=True).data
        return response

    class Meta:
        model = Order
        fields = ['id','type', 'status', 'customer', 'items']

class DocumentCategorySerializer(serializers.ModelSerializer):
    translation_type = serializers.CharField(source='get_translation_type_display')
    class Meta:
        model = DocumentCategory
        fields = '__all__'

class DocumentTypeSerializer(serializers.ModelSerializer):
    currency = serializers.CharField(source='get_currency_display')
    class Meta:
        model = DocumentType
        fields = '__all__'