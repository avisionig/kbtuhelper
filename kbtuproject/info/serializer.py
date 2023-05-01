from rest_framework import serializers
from info.models import News, Organization, Event


class NewsSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    title = serializers.CharField()
    description = serializers.CharField()
    date = serializers.DateField(read_only=True)

    def create(self, validated_data):
        news = News.objects.create(**validated_data)
        return news

    def update(self, instance, validated_data):
        instance.id = instance.id
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.date = instance.date
        instance.save()
        return instance


class EventSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    title = serializers.CharField()
    description = serializers.CharField()
    date = serializers.DateField(read_only=True)

    def create(self, validated_data):
        event = Event.objects.create(**validated_data)
        return event

    def update(self, instance, validated_data):
        instance.id = instance.id
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description', instance.description)
        instance.date = instance.date
        instance.save()
        return instance


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ('id', 'name', 'description', 'photo')
        read_only_field = ['id']
