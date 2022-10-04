from rest_framework import generics, permissions, mixins
from rest_framework.response import Response

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

from .filters import UserFilter

from .notifications import send_auth_sms_token
from .serializers import (
    MobileAuthSerializer,
    UserSerializer,
    VerifyAuthSerializer,
)
from .permissions import IsStaffUser
from .models import User, AuthToken

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

class UserListView(GenericView):
    serializer_class = UserSerializer
    permission_classes = (IsStaffUser,)
    filterset_class = UserFilter
    queryset = User.objects.exclude(is_superuser=True).exclude(is_staff=True)

class GetSMSTokenView(APIView):
    serializer_class = MobileAuthSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={'request': request})
        if not serializer.is_valid(raise_exception=True):
            return Response(serializer.error_messages, status=status.HTTP_400_BAD_REQUEST)
        # CREATE USER IF NOT EXISTS
        user, _ = User.objects.get_or_create(mobile=serializer.validated_data.get('mobile',None))
        
        if not user.is_active:
            return Response({'success': False, 'error': 'Inactive User'}, status=status.HTTP_403_FORBIDDEN)

        auth , created = AuthToken.objects.get_or_create(user=user)
        if created or auth.is_expired or not auth.token1:
            auth.token1 = AuthToken.generate_numeric_token(length= 4)
            auth.failed_attempts = 0
            success = send_auth_sms_token(auth.user.mobile, auth.token1, 'verify')
            if not success:
                return Response({'success': False, 'error': 'SMS failed'}, status=status.HTTP_424_FAILED_DEPENDENCY)
            auth.save()

        return Response({'success': True, 'uuid': auth.uid, 'expires_on':auth.expires_on.timestamp()}, status=status.HTTP_200_OK)

class VerifySMSTokenView(APIView):
    serializer_class = VerifyAuthSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = self.serializer_class(data=request.data, context={'request': request})
        valid = serializer.is_valid(raise_exception=True)

        if valid:

            return Response({
                'success': True,
                'access': serializer.data.get('access'),
                'refresh': serializer.data.get('refresh'),
                'user': serializer.data.get('user'),
            }, status=status.HTTP_200_OK)
        
        return Response({'success': False}, status=status.HTTP_400_BAD_REQUEST)

