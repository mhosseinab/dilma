from django.contrib import admin
from .models import *

admin.site.register(Order)
admin.site.register(Language)
admin.site.register(DocumentCategory)
admin.site.register(DocumentType)
admin.site.register(OrderItem)
admin.site.register(Ticket)
admin.site.register(TicketComment)
admin.site.register(File)
