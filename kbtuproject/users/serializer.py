from rest_framework import serializers
from info.models import Organization
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    organization = serializers.SlugRelatedField(queryset=Organization.objects.all(), slug_field='name')

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'username', 'password',
                  'organization', 'phone_number', 'faculty')
        read_only_field = ['id']
