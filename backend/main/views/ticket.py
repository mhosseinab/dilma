import json

from django.forms import model_to_dict
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from main.models import File, Language, DocumentType, DocumentCategory, Order, OrderItem, Ticket, TicketComment


class TicketView(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request):
        user = request.user
        title = request.data.get("title", "")
        order_id = request.data.get("order_id")
        message = request.data.get("message", "")
        file_id = request.data.get("file_id")
        if message.strip() == "" or title.strip() == "":
            return Response({"message": "message and title fields are mandatory"}, status=status.HTTP_400_BAD_REQUEST)
        try:
            order = None
            file = None
            if order_id is not None:
                order = Order.objects.get(id=order_id, user=user)
            if file_id is not None:
                file = File.objects.get(id=file_id)
            ticket = Ticket.objects.create(title=title, customer=user, order=order)
            TicketComment.objects.create(ticket=ticket, message=message, file=file)
            return Response({"message": "ticket submitted successfully", "ticket": {
                **model_to_dict(ticket),
                "messages": [model_to_dict(d) for d in ticket.ticketcomment_set.all()]
            }})
        except:
            return Response({"message": "order_id or file_id is not valid"}, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request):
        message = request.data.get("message", "")
        file_id = request.data.get("file_id")
        ticket_id = request.data.get("ticket_id", None)
        if message.strip() == "" or ticket_id is None:
            return Response({"message": "message and ticket_id fields are mandatory"},
                            status=status.HTTP_400_BAD_REQUEST)
        try:
            ticket = Ticket.objects.get(id=ticket_id)
            file = None
            if file_id is not None:
                file = File.objects.get(id=file_id)
            TicketComment.objects.create(ticket=ticket, message=message, file=file)
            return Response({"message": "message added successfully", "ticket": {
                **model_to_dict(ticket),
                "messages": [model_to_dict(d) for d in ticket.ticketcomment_set.all()]
            }})
        except:
            return Response({"message": "ticket_id or file_id is not valid"}, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        return Response({"tickets": [
            {**model_to_dict(ticket), "messages": ticket.ticketcomment_set.all().values()} for ticket in
            Ticket.objects.filter(customer=request.user).all()
        ]
        })
