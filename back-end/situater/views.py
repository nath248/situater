from rest_framework import viewsets, permissions
from situater.serializers import AttractionSerializer, LocationSerializer
from situater.models import Attraction, Location

# Create your views here.

class AttractionViewSet(viewsets.ModelViewSet):
    queryset = Attraction.objects.all()
    serializer_class = AttractionSerializer
    permission_classes = [permissions.AllowAny]


class LocationViewSet(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = [permissions.AllowAny]