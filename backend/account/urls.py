from django.urls import path
from rest_framework_simplejwt import views as jwt_views

from .views import (
    UserListView,
    GetSMSTokenView,
    VerifySMSTokenView,
)

urlpatterns = [
    path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', UserListView.as_view(), name='users'),
    path('sms/get_token', GetSMSTokenView.as_view(), name='sms_login'),
    path('sms/verify_token', VerifySMSTokenView.as_view(), name='sms_login_verify'),
]
