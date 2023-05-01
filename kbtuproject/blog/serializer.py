from rest_framework import serializers
from blog.models import Post
from users.serializer import UserSerializer


class PostSerializer(serializers.ModelSerializer):
    likes = UserSerializer(many=True)

    class Meta:
        model = Post
        fields = ('id', 'author', 'content', 'likes')
        read_only_field = ['id', 'author']
