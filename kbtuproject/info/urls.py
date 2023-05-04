from django.urls import path
import info.views as view

urlpatterns = [
    path('news/', view.NewsList.as_view()),
    path('news/<int:pk>', view.NewsDetail.as_view()),
    path('event/', view.EventList.as_view()),
    path('event/<int:pk>', view.EventDetail.as_view()),
    path('organizations/', view.get_orgs),
    path('organizations/<int:pk>', view.get_org)
]
