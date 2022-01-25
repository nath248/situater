from rest_framework import serializers
from situater.models import Location, Attraction

class AttractionSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Attraction
        fields = ['name', 'image', 'type', 'price', 'rating']


class LocationSerializer(serializers.HyperlinkedModelSerializer):
    attractions = serializers.StringRelatedField(many=True)

    class Meta:
        model = Location
        fields = ['name', 'image', 'attractions']