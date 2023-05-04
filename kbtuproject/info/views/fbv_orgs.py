from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from info.models import Organization
from info.serializer import OrganizationSerializer


@api_view(['GET','POST'])
def get_orgs(request):
    if request.method == 'GET':
        serializer = OrganizationSerializer(Organization.objects.all(), many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = OrganizationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def get_org(request, pk):
    try:
        organization = Organization.objects.get(pk=pk)
    except Organization.DoesNotExist as e:
        return Response({'error': str(e)}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = OrganizationSerializer(organization)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = OrganizationSerializer(instance=organization, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DElETE':
        organization.delete()
        return Response({'delete': True}, status=status.HTTP_202_ACCEPTED)

