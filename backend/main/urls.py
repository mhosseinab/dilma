from django.urls import path

from main.views import *

urlpatterns = [
    path('files/', FileUploader.as_view(), name='files'),
    path('orders/', OrderView.as_view(), name='order_list'),
    path('orders/<int:pk>/', OrderView.as_view(), name='order'),
    path('order/items/', OrderItemView.as_view(), name='order_list'),
    path('order/items/<int:pk>/', OrderItemView.as_view(), name='order'),
    path('order/cats/', DocumentCategoryView.as_view(), name='order_list'),
    path('order/cats/<int:pk>/', DocumentCategoryView.as_view(), name='order'),
    path('order/types/', DocumentTypeView.as_view(), name='order_list'),
    path('order/types/<int:pk>/', DocumentTypeView.as_view(), name='order'),
    path('tickets/', TicketView.as_view(), name='ticket'),
]
