from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from blog.serializer import *


@api_view(['GET', 'POST'])
def get_posts(request):
    if request.method == 'GET':
        posts = Post.objects.all()
        return Response(PostSerializer(posts, many=True).data)
    if request.method == 'POST':
        serializer = PostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def get_post(request, pk):
    try:
        post = Post.objects.get(pk=pk)
    except Post.DoesNotExist as e:
        return Response({'error': 'post does not exist'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        serializer = PostSerializer(post)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "PUT":
        serializer = PostSerializer(instance=post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        post.delete()
        return Response({'delete': True}, status=status.HTTP_202_ACCEPTED)


@api_view(['GET', 'DELETE', 'PUT'])
def get_tag(request, pk):
    try:
        tag = Tag.objects.get(pk=pk)
    except Tag.DoesNotExist as e:
        return Response({'error':str(e)}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = TagSerializer(tag)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = TagSerializer(instance=tag, data=request.data)
        if serializer.is_valid():
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        tag.delete()
        return Response({'delete': True}, status=status.HTTP_202_ACCEPTED)


@api_view(['GET', 'POST'])
def get_tags(request):
    if request.method == 'GET':
        serializer = TagSerializer(Tag.objects.all(),many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = TagSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
