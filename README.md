# API MetaSEE

This project is a API and it aims provide data for MetaSEE virtual worlds.

# API Description

## UML Class
| Verb | URL | Description
| - | - | - |
| GET | /umlclasses | It returns all uml classes |
| GET | /umlclass/**[id]** | It returns a uml class by [id] |
| GET | /umlclass/search?user=**[user]** | It returns all uml classes by [user] |
| POST | /umlclass | It creates a uml class and it returns the new uml class created |
| PUT | /umlclass | It updates a uml class |
| DELETE | /umlclass/**[id]** | It deletes a uml class by [id]|

### JSON Schema
``` json
{
	_id: ObjectId,
	classname: String,
	owner: ObjectId,
	position: {x:Number, y:Number, z:Number},
	rotation: {x:Number, y:Number, z:Number},
	scale: {x:Number, y:Number, z:Number},
	color: String
}
```
- `_id` : uml class id
- `classname` : uml class name
- `owner` : uml class user creator
- `position` : uml class postions' data
- `rotation` : uml class rotation' data
- `scale` : uml class scale' data
- `color` : uml class color


## UML Association
| Verb | URL | Description
| - | - | - |
| GET | /umlassociations | It returns all uml associations |
| GET | /umlassociation/**[id]** | It returns a uml association by [id] |
| GET | /umlassociation/search?startclass=**[startclass]** | It returns all uml associations by [startclass] |
| GET | /umlassociation/search?endclass=**[endclass]** | It returns all uml associations by [endclass] |
| POST | /umlassociation | It creates a uml association and it returns the new association class created|
| PUT | /umlassociation | It updates a uml association |
| DELETE | /umlassociation/**[id]** | It deletes a uml association by [id]|

### JSON Schema
``` json
{
	_id: ObjectId,
	umlclass_start: ObjectId,
	umlclass_end: ObjectId,
}
```
- `_id` : uml association id
- `umlclass_start` : uml association starts at the uml class
- `umlclass_end` : uml association ends at the uml class