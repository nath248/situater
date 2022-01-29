from rest_framework import serializers
from situater.models import Location, Attraction

class AttractionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Attraction
        fields = ['id', 'name', 'image', 'type', 'price', 'rating', 'location']


class LocationSerializer(serializers.ModelSerializer):
    attractions = AttractionSerializer(many=True)

    class Meta:
        model = Location
        fields = ['id', 'name', 'image', 'attractions']
        
    def create(self, validated_data):
            attractions_data = validated_data.pop('attractions')
            location = Location.objects.create(**validated_data)
            for attraction_data in attractions_data:
                Attraction.objects.create(location=location, **attraction_data)
            return location
          
    def update(self, instance, validated_data):
            attractions_data = validated_data.pop('attractions')
            attractions = (instance.attractions).all()
            attractions = list(attractions)
            instance.name = validated_data.get('name', instance.name)
            instance.image = validated_data.get('image', instance.image)
            instance.save()

            for attraction_data in attractions_data:
                attraction = attractions.pop(0)
                attraction.name = attraction_data.get('name', attraction.name)
                attraction.image = attraction_data.get('image', attraction.image)
                attraction.type = attraction_data.get('type', attraction.type)
                attraction.price = attraction_data.get('price', attraction.price)
                attraction.rating = attraction_data.get('rating', attraction.rating)
                attraction.save()
            return instance