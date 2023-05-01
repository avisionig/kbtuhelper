from django.contrib import admin

from info.models import Organization, News, Event

# Register your models here.

admin.site.register(Organization)
admin.site.register(News)
admin.site.register(Event)
