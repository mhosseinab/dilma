from time       import time
from hashlib    import sha1
from datetime   import date
from pathlib    import Path
from uuid       import uuid4

from django.db import models

from account.models import User

def generate_filename(instance, filename):
    today = date.today()
    p = Path(filename)
    filename , ext = p.stem , p.suffix
    return Path('files', today.strftime("%Y/%m"), f'{sha1((str(time()) + filename).encode("ascii", "ignore")).hexdigest()}{ext}')


# Create your models here.
class Order(models.Model):

    TRANSLATION = 1
    OFFICIAL_TRANSLATION = 2
    INTERPRETATION = 3
    CONTENT_CREATION = 4
    EXAM = 5
    MOVIE_TRANSLATION = 6
    BOOK_TRANSLATION = 7

    TYPE_CHOICES = (
        (TRANSLATION, 'Translation'),
        (OFFICIAL_TRANSLATION, 'Official Translation'),
        (INTERPRETATION, 'Interpretation'),
        (CONTENT_CREATION, 'Content Creation'),
        (EXAM, 'Exam'),
        (MOVIE_TRANSLATION, 'Movie Translation'),
        (BOOK_TRANSLATION, 'Book Translation'),
    )

    NEW = 1
    IN_PROGRESS = 2
    FINISHED = 3

    STATUS_CHOICES = (
        (NEW, 'New'),
        (IN_PROGRESS, 'In Progress'),
        (FINISHED, 'Finished'),
    )

    type = models.PositiveSmallIntegerField(choices=TYPE_CHOICES)
    status = models.PositiveSmallIntegerField(choices=STATUS_CHOICES, default=NEW)
    customer = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=False, )
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.pk}'
    class Meta:
        ordering = ['id']

class Language(models.Model):

    SOURCE = 1
    TRANSLATION = 2
    LANGUAGE_TYPE_CHOICES = (
        (SOURCE, 'Source'),
        (TRANSLATION, 'Translation')
    )

    OFFICIAL = 1
    NONOFFICIAL = 2
    TRANSLATION_TYPE_CHOICES = (
        (OFFICIAL, 'Official'),
        (NONOFFICIAL, 'Nonofficial')
    )

    title_fa = models.CharField(max_length=250)
    title_en = models.CharField(max_length=250)
    language_type = models.PositiveSmallIntegerField(choices=LANGUAGE_TYPE_CHOICES)
    translation_type = models.PositiveSmallIntegerField(choices=TRANSLATION_TYPE_CHOICES)
    
    def __str__(self):
        return f'{"»" if self.language_type == self.SOURCE else "«"} {self.title_fa}'
    class Meta:
        ordering = ['id']

class DocumentCategory(models.Model):

    OFFICIAL = 1
    NONOFFICIAL = 2
    TRANSLATION_TYPE_CHOICES = (
        (OFFICIAL, 'official'),
        (NONOFFICIAL, 'unofficial')
    )

    title_fa = models.CharField(max_length=250)
    title_en = models.CharField(max_length=250)
    translation_type = models.PositiveSmallIntegerField(choices=TRANSLATION_TYPE_CHOICES)
    def __str__(self):
        return f'{self.title_fa}'
    class Meta:
        ordering = ['id']

class DocumentType(models.Model):

    IRR = 1
    IRT = 2
    CURRENCY_CHOICES = (
        (IRR, 'IRR'),
        (IRT, 'IRT'),
    )

    title_fa = models.CharField(max_length=250)
    title_en = models.CharField(max_length=250)
    price = models.CharField(max_length=20)
    currency = models.PositiveSmallIntegerField(choices=CURRENCY_CHOICES)
    category = models.ForeignKey(DocumentCategory, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.title_fa}'
    class Meta:
        ordering = ['id']

class File(models.Model):
    
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False, unique=True, db_index=True)
    file = models.FileField(upload_to=generate_filename)
    owner = models.ForeignKey(User,  on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.file}'
    class Meta:
        ordering = ['createdAt']

class OrderItem(models.Model):

    order = models.ForeignKey(Order, on_delete=models.CASCADE, )
    document_type = models.ForeignKey(DocumentType, on_delete=models.PROTECT, )
    file = models.ForeignKey(File, on_delete=models.PROTECT, )
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ['id']


class Ticket(models.Model):

    customer = models.ForeignKey(User, on_delete=models.PROTECT, )
    order = models.ForeignKey(Order, on_delete=models.PROTECT, )
    title = models.CharField(max_length=60)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ['id']


class TicketComment(models.Model):

    author = models.ForeignKey(User, on_delete=models.PROTECT, )
    ticket = models.ForeignKey(Ticket, on_delete=models.PROTECT, )
    message = models.TextField()
    file = models.ForeignKey(File, on_delete=models.PROTECT, )
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    class Meta:
        ordering = ['id']
