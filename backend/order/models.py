from time       import time
from hashlib    import sha1
from datetime   import date
from pathlib    import Path
from uuid       import uuid4

from django.db import models

def generate_filename(instance, filename):
    today = date.today()
    p = Path(filename)
    filename , ext = p.stem , p.suffix
    return Path('files', today.strftime("%Y/%m"), f'{sha1((str(time()) + filename).encode("ascii", "ignore")).hexdigest()}{ext}')

class Order(models.Model): 

    ORDER_TYPE_OFFICIAL_TRANSLATION = 1
    ORDER_TYPE_CONTENT              = 2
    ORDER_TYPE_SUBTITLE             = 3
    ORDER_TYPE_PAPER                = 4

    STATUS_NEW          = 1
    STATUS_NOT_PAID     = 2
    STATUS_PENDING      = 3
    STATUS_IN_PROGRESS  = 4
    STATUS_DONE         = 5

    DELIVERY_NORMAL = 1
    DELIVERY_FAST   = 2
    DELIVERY_URGENT = 3

    ORDER_TYPE_CHOICES = (
        (ORDER_TYPE_OFFICIAL_TRANSLATION, 'ترجمه رسمی'),
        (ORDER_TYPE_CONTENT, 'تولید محتوا'),
        (ORDER_TYPE_SUBTITLE, 'زیرنویس'),
        (ORDER_TYPE_PAPER, 'مقاله / کتاب'),
    )

    STATUS_CHOICES = (
        (STATUS_NEW, 'New'),
        (STATUS_NOT_PAID, 'Not Paid'),
        (STATUS_PENDING, 'Pending'),
        (STATUS_IN_PROGRESS, 'In Progress'),
        (STATUS_DONE, 'Done'),
    )

    DELIVERY_CHOICES = (
        (DELIVERY_NORMAL, 'Normal'),
        (DELIVERY_FAST, 'Fast'),
        (DELIVERY_URGENT, 'Urgent'),
    )

    DELIVERY_PRICE_BASE = 10_000
    DELIVERY_PRICE_RATIO = (
        (DELIVERY_NORMAL, 1),
        (DELIVERY_FAST, 1.25),
        (DELIVERY_URGENT, 1.5),
    )

    uuid            = models.UUIDField(default=uuid4, editable=False, unique=True, db_index=True)
    customer        = models.ForeignKey('account.User', on_delete=models.PROTECT, null=True, blank=False)
    from_language   = models.ForeignKey('Language', on_delete=models.PROTECT, related_name='to_language')
    to_language     = models.ForeignKey('Language', on_delete=models.PROTECT, related_name='from_language')
    type            = models.PositiveSmallIntegerField(choices=ORDER_TYPE_CHOICES)
    status          = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=STATUS_NEW)
    delivery_option = models.PositiveSmallIntegerField(choices=DELIVERY_CHOICES, default=DELIVERY_NORMAL)
    createdAt       = models.DateTimeField(auto_now_add=True, editable=False)
    updatedAt       = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f'{self.pk}'
    class Meta:
        ordering = ['id']

class DocType(models.Model): 
    VERIFICATION_NONE    = 1
    VERIFICATION_MOJ     = 2
    VERIFICATION_MFA     = 3
    VERIFICATION_MOJ_MFA = 4

    UNIT_PAGE    = 1
    UNIT_WORD    = 2
    UNIT_TERM    = 3
    UNIT_COUNT   = 4
    UNIT_MINUNTE = 5

    PICKUP_INPERSON = 1
    PICKUP_PEYK     = 2
    PICKUP_ONLINE   = 3

    VERIFICATION_CHOICES = (
        (VERIFICATION_NONE, 'None'),
        (VERIFICATION_MFA, 'MFA'),
        (VERIFICATION_MOJ, 'MOJ'),
        (VERIFICATION_MOJ_MFA, 'MOJ + MFA'),
    )

    UNIT_CHOICES = (
        (UNIT_PAGE, 'صفحه'),
        (UNIT_WORD, 'کلمه'),
        (UNIT_TERM, 'ترم'),
        (UNIT_COUNT, 'تعداد'),
        (UNIT_MINUNTE, 'دقیقه'),
    )

    PICKUP_CHOICES = (
        (PICKUP_INPERSON, 'In Person'),
        (PICKUP_PEYK, 'Peyk'),
        (PICKUP_ONLINE, 'Online'),
    )

    name          = models.CharField(max_length=250)
    type          = models.PositiveSmallIntegerField(choices=Order.ORDER_TYPE_CHOICES, default=Order.ORDER_TYPE_OFFICIAL_TRANSLATION)
    unit          = models.PositiveSmallIntegerField(choices=UNIT_CHOICES)
    base_price    = models.PositiveIntegerField()
    stamp_option  = models.PositiveSmallIntegerField(choices=VERIFICATION_CHOICES, default=VERIFICATION_NONE)
    pickup_option = models.PositiveSmallIntegerField(choices=PICKUP_CHOICES, default=PICKUP_ONLINE)
    
    stamp_moj_price = models.PositiveIntegerField(default=0)
    stamp_mfa_price = models.PositiveIntegerField(default=0)
    
    createdAt = models.DateTimeField(auto_now_add=True, editable=False)
    updatedAt = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return f'{self.pk}'
    class Meta:
        ordering = ['id']

class OrderItem(models.Model): 
    STATUS_NEW          = 1
    STATUS_PENDING      = 2
    STATUS_IN_PROGRESS  = 3
    STATUS_DONE         = 4

    STATUS_CHOICES = (
        (STATUS_NEW, 'New'),
        (STATUS_PENDING, 'Pending'),
        (STATUS_IN_PROGRESS, 'In Progress'),
        (STATUS_DONE, 'Done'),
    )
    
    uuid     = models.UUIDField(default=uuid4, editable=False, unique=True, db_index=True)
    order    = models.ForeignKey('Order', on_delete=models.PROTECT, null=True, blank=True)
    doc_type = models.ForeignKey('DocType', on_delete=models.PROTECT)
    upload   = models.ForeignKey('Upload', on_delete=models.PROTECT, null=True, blank=True)
    asignee  = models.ForeignKey('account.User', on_delete=models.PROTECT, null=True, blank=True)
    discount = models.ForeignKey('Discount', on_delete=models.PROTECT, null=True, blank=True)
    stamp    = models.PositiveSmallIntegerField(choices=DocType.VERIFICATION_CHOICES, default=DocType.VERIFICATION_NONE)
    pickup   = models.PositiveSmallIntegerField(choices=DocType.PICKUP_CHOICES, default=DocType.PICKUP_ONLINE)
    status          = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=STATUS_NEW)
    count           = models.PositiveIntegerField()
    discount_amount = models.PositiveIntegerField(default=0)
    
    createdAt    = models.DateTimeField(auto_now_add=True, editable=False)
    updatedAt    = models.DateTimeField(auto_now=True)
    
    @property
    def price(self):
        value = self.count * self.doc_type.base_price
        if self.stamp:
            value = value + self.doc_type.base_price # TODO: calculate stamp price
        return value
    
    def __str__(self):
        return f'{self.pk}'
    class Meta:
        ordering = ['id']

class Language(models.Model): 
    name = models.CharField(max_length=250)
    name_fa = models.CharField(max_length=250)
    is_source = models.BooleanField(default=True)
    is_destination = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.name}'
    class Meta:
        ordering = ['id']

class Upload(models.Model): 
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False, unique=True, db_index=True)
    file = models.FileField(upload_to=generate_filename)
    owner = models.ForeignKey('account.User',  on_delete=models.CASCADE, null=True, blank=True)
    ext_id = models.UUIDField(default=uuid4)
    createdAt = models.DateTimeField(auto_now_add=True, editable=False)
    updatedAt = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f'{self.pk}'
    class Meta:
        ordering = ['id']

class DocCategory(models.Model): 
    name = models.CharField(max_length=250)
    priority = models.SmallIntegerField(default=0)
    items = models.ManyToManyField('DocType', blank=True)

    def __str__(self):
        return f'{self.pk}'
    class Meta:
        ordering = ['-priority', 'name']

class Discount(models.Model): 
    name      = models.CharField(max_length=80)
    code      = models.CharField(max_length=40, unique=True, db_index=True)
    value     = models.FloatField()
    customer  = models.ForeignKey('account.User', on_delete=models.CASCADE, null=True, blank=False)
    is_active = models.BooleanField(default=True)
    max_use   = models.PositiveIntegerField(null=True, blank=True)
    expiresOn = models.DateField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True, editable=False)
    updatedAt = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f'{self.pk}'
    class Meta:
        ordering = ['id']


class Invoice(models.Model): 

    STATUS_NEW     = 1
    STATUS_FAILED  = 2
    STATUS_PENDING = 3
    STATUS_SUCCESS = 4

    GATEWAY_SEP = 1

    STATUS_CHOICES = (
        (STATUS_NEW, 'New'),
        (STATUS_FAILED, 'Failed'),
        (STATUS_PENDING, 'Pending'),
        (STATUS_SUCCESS, 'Success'),
    )

    GATEWAY_CHOICES = (
        (GATEWAY_SEP, 'SEP'),
    )

    uuid   = models.UUIDField(default=uuid4, editable=False, unique=True, db_index=True)
    order  = models.ForeignKey('Order', on_delete=models.CASCADE)
    amount = models.PositiveIntegerField

    gateway = models.PositiveSmallIntegerField(choices=GATEWAY_CHOICES, default=GATEWAY_SEP)
    recipt  = models.CharField(max_length=300,null=True,blank=True)
    tid     = models.CharField(max_length=300,null=True,blank=True)
    card    = models.CharField(max_length=50,null=True,blank=True,default=None)
    trace   = models.CharField(max_length=50,null=True,blank=True,default=None)
    
    status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=STATUS_NEW)
    note   = models.TextField(blank=True, null=True)

    createdAt = models.DateTimeField(auto_now_add=True, editable=False)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.uuid}'
    class Meta:
        ordering = ['id']



