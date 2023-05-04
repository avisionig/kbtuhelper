from rest_framework import serializers
from info.models import Organization
from users.models import User


class UserSerializer(serializers.ModelSerializer):
    organization = serializers.SlugRelatedField(queryset=Organization.objects.all(), slug_field='id', required=False)

    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name', 'username', 'password',
                  'organization', 'phone_number', 'faculty')
        read_only_field = ['id']

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'],
                                   first_name=validated_data['first_name'],
                                   last_name=validated_data['last_name'],
                                   username=validated_data['username'],
                                   )
        user.set_password(validated_data['password'])
        user.save()
        return user

