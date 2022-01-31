# SITUATER

The SITUATER app allows the user to get information on different attrations in a specified location.

# Wireframe

[Situater Wireframe](https://www.figma.com/file/9nBGAOyDWkY3Q6NKJzUGwV/Situater?node-id=0%3A1 "Situater Wireframe")

# Entity Relationship Diagram

[Entity Relationship Diagram](https://www.figma.com/file/yCFAm0cDH4qkxinEJbXVyG/Situater?node-id=0%3A1 "Entity Relationship Diagram")
![alt text][diagram]

[diagram]: https://res.cloudinary.com/dojhf40bp/image/upload/v1643054480/entity-diagram_qk8xix.png "Entity Relationship Diagram"

# Component Hierarchy

[Component Hierarchy](https://www.figma.com/file/4mwc0TqHd0QRaj1ejMnjvJ/Situater---Component-Hierarchy?node-id=0%3A1 "Component Hierarchy")
![alt text][hierarchy]

[hierarchy]: https://res.cloudinary.com/dojhf40bp/image/upload/v1643057267/component-hierarchy_qu334f.png "Component Hierarchy"

# Endpoints

## Locations

### ID

You can use below endpoint to access locations by id. Replace the `<id>` with the actual id number of the location.

GET - /location/`<id>`

```
{
  "id": 1,
  "name": "Cancun, Mexico",
  "image": "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,h_400,w_400/v1643120632/joseph-barrientos-haOaBVJ45pU-unsplash_k6j1sq.jpg",
  "attractions": [
            {
            "id": 1,
            "name": "Xcaret Cenote Tour",
            "image": "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,h_350,w_400/v1643121103/blog-xichen-9-1080x640_piysxd.jpg",
            "type": "Natural Attraction",
            "price": 199,
            "rating": "4/5",
            "location": 1
            }
          ]
}
```

### Example:

## Attractions

### ID

You can use below endpoint to access locations by id. Replace the `<id>` with the actual id number of the attraction.

GET - /location/`<id>`

```
{
    "id": 1,
    "name": "Xcaret Cenote Tour",
    "image": "https://res.cloudinary.com/dojhf40bp/image/upload/c_scale,h_350,w_400/v1643121103/blog-xichen-9-1080x640_piysxd.jpg",
    "type": "Natural Attraction",
    "price": 199,
    "rating": "4/5",
    "location": 1
}
```

# Dependencies

django
psycopg2
djangorestframework
djangorestframework-simplejwt
gunicorn
whitenoise
dj-database-url
python-dotenv

# Resources

https://codesandbox.io/s/naughty-sara-q3m16?file=/src/index.js
https://upmostly.com/tutorials/setinterval-in-react-components-using-hooks
