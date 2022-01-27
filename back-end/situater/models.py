from django.db import models

# Create your models here.

class Location(models.Model):
  name = models.CharField(max_length=800)
  image = models.CharField(max_length=800)
  
  def __str__(self):
        return self.name
  
class Attraction(models.Model):
    name = models.CharField(max_length=800)
    image = models.CharField(max_length=800)
    type = models.CharField(max_length=800)
    price = models.PositiveIntegerField(default=0)
    rating = models.CharField(max_length=800)
    location = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='attractions')

    def __str__(self):
        return self.name