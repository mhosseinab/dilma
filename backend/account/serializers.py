from logging import getLogger
from django.contrib.auth.models import update_last_login
from rest_framework import serializers
from django.core.validators import RegexValidator
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User, AuthToken

logger = getLogger(__name__)

VALIDATOR_PHONE_REGEX = RegexValidator(regex=r'^(98|09)\d{9,10}$',  message="Mobile number is invalid")

class UserSerializer(serializers.ModelSerializer):
    # role = serializers.CharField(source='get_role_display')
    class Meta:
        model = User
        # fields = ('__all__')
        exclude = ['password', 'groups', 'user_permissions']

class MobileAuthSerializer(serializers.Serializer):
    mobile = serializers.CharField(validators=[VALIDATOR_PHONE_REGEX], max_length=12)

class VerifyAuthSerializer(serializers.Serializer):
    uuid = serializers.UUIDField()
    token = serializers.CharField(max_length=6)
    access = serializers.CharField(read_only=True)
    refresh = serializers.CharField(read_only=True)
    user = UserSerializer(read_only=True)

    def validate(self, data):
        uuid:str = data.get('uuid', '')
        token:str = data.get('token', '')
        auth_type:int = data.get('auth_type', 1)

        try:
            auth:AuthToken = AuthToken.objects.get(uid=uuid) 
        except:
            raise serializers.ValidationError({"uuid": "invalid uuid"})

        if not auth.is_valid(auth.token1 if auth_type==1 else auth.token2, token):
            raise serializers.ValidationError({"token": "invalid token"})
        
        user:User = auth.user

        try:
            refresh = RefreshToken.for_user(user)
            refresh_token = str(refresh)
            access_token = str(refresh.access_token)

            update_last_login(None, user)

            validation = {
                'uuid': uuid,
                'token': token,
                'auth_type': auth_type,
                'access': access_token,
                'refresh': refresh_token,
                'user' : UserSerializer(user).data,
            }

            return validation
        except Exception as e:
            logger.error(e)
            raise serializers.ValidationError("integrity failed")
