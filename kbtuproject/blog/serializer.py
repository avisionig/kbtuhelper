from rest_framework import serializers
from blog.models import Post, Tag
from users.models import User
from users.serializer import UserSerializer


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name')
        read_only_field = ['id']


class PostSerializer(serializers.ModelSerializer):
    tag = serializers.SlugRelatedField(queryset=Tag.objects.all(), slug_field="id")
    author = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field="id")

    class Meta:
        model = Post
        fields = ('id', 'author', 'content', 'tag')
        read_only_field = ['id', 'author', 'tag']

    # def update(self, instance, validated_data):
    #     instance.content = validated_data.get('content', instance.content)
    #     instance.save()
    #     return instance
