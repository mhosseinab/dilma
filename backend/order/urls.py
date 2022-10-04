from django.urls import path

from .views import FileUploader, OrderView, LanguageView, DocCategoryView, DocTypeView, OrderConfigView

urlpatterns = [
    path('config/', OrderConfigView.as_view(), name='order_cat'),
    path('cats/', DocCategoryView.as_view(), name='order_cat'),
    path('types/', DocTypeView.as_view(), name='order_type'),
    path('langs/', LanguageView.as_view(), name='order_lang'),
    path('upload/', FileUploader.as_view(), name='order_upload'),
    path('', OrderView.as_view(), name='order_view'),
    path('<int:pk>/', OrderView.as_view(), name='order_view'),
    # path('orders/', OrderView.as_view(), name='order_list'),
    # path('orders/<int:pk>/', OrderView.as_view(), name='order'),
]
