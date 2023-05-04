from django.urls import path
from blog import views

urlpatterns = [
    path('posts/', views.get_posts),
    path('posts/<int:pk>', views.get_post),
    path('tags/', views.get_tags),
    path('tags/<int:pk>', views.get_tag)
]
