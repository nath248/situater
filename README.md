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

### Example:

### Name

You can use below endpoint to access locations by name. Replace the `<name>` with the actual name number of the location.

GET - /location/`<name>`

### Example:

## Attractions

### ID

You can use below endpoint to access locations by id. Replace the `<id>` with the actual id number of the attraction.

GET - /location/`<id>`

### Example:

### Type

You can use below endpoint to access locations by type. Replace the `<type>` with the actual type number of the attraction.

GET - /location/`<type>`

### Example:

### Rating

You can use below endpoint to access locations by rating. Replace the `<rating>` with the actual rating number of the attraction.

GET - /location/`<rating>`

### Example:

# Dependencies

django
psycopg2
djangorestframework
djangorestframework-simplejwt
gunicorn
whitenoise
dj-database-url
python-dotenv
