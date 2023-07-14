## Rutas API

### Autenticación

* **Login**

Method: `POST`

Request Body:
```json
{
    "username": "nombre_de_usuario",
    "password": "constraseña_de_usuario"
}
```

Route:
```
/api/auth/login
```

Response Body: `ON SUCCESS`
```json
{
    "data": {
        "username": "nombre_de_usuario",
        "token": "token_de_acceso_del_usuario"
    },
    "status": "codigo_de_status",
    "message": "mensaje_de_error_o_confirmación"
}
```

* **Registro**

Method: `POST`

Request Body:
```json
{
    "names": "nombres_de_usuario",
    "surnames": "apellidos_de_usuario",
    "username": "nombre_de_usuario",
    "password": "constraseña_de_usuario",
    "dni": "dni_de_usuario",
    "birthdate": "fecha_de_nacimiento_de_usuario",
    "phone": "teléfono_del_usuario",
    "address": "dirección_del_usuario",
}
```

Route:
```
/api/auth/register
```

Response Body: `ON SUCCESS`
```json
{
    "data": {
        "username": "nombre_de_usuario",
        "token": "token_de_acceso_del_usuario"
    },
    "status": "codigo_de_status",
    "message": "mensaje_de_error_o_confirmación"
}
```

### Clases

* **Obtener todos las clases**

Method: `GET`

Route:
```
/api/classrooms/
```

* **Obtener todos las clases filtradas por descripción**

Method: `GET`

Route:
```
/api/classrooms?description={descripcion}
```

* **Crear clase**

Method: `POST`

Request Body:
```json
{
    "description": "nombre_de_la_clase",
    "classtime": { "id": "id_del_turno" }
}
```

Route:
```
/api/classrooms
```

* **Editar clase**

Method: `PUT`

Request Body:
```json
{
    "description": "nombre_de_la_clase",
    "classtime": { "id": "id_del_turno" }
}
```

Route:
```
/api/classrooms/{id_clase}
```

* **Eliminar clase**

Method: `DELETE`

Route:
```
/api/classrooms/{id_clase}
```

### Estudiantes

* **Obtener todos los estudiantes**

Method: `GET`

Route:
```
/api/students
```

* **Obtener todos los estudiantes filtrado por nombre y clase**

Method: `GET`

Route:
```
/api/students?name={nombre}&idClass={id_clase}
```

* **Obtener estudiante**

Method: `GET`

Route:
```
/api/students/{id_estudiante}
```

* **Crear estudiante**

Method: `POST`

Request Body:
```json
{
    "names": "nombres_del_estudiante",
    "surnames": "apellidos_del_estudiante",
    "dni": "dni_del_estudiante",,
    "birthdate": "fecha_de_nacimiento_del_estudiante",
    "phone": "teléfono_del_estudiante",
    "address": "dirección_del_estudiante",
}
```

Route:
```
/api/students
```

* **Editar estudiante**

Method: `PUT`

Request Body:
```json
{
    "names": "nombres_del_estudiante",
    "surnames": "apellidos_del_estudiante",
    "dni": "dni_del_estudiante",,
    "birthdate": "fecha_de_nacimiento_del_estudiante",
    "phone": "teléfono_del_estudiante",
    "address": "dirección_del_estudiante",
}
```

Route:
```
/api/students/{id_estudiante}
```

* **Eliminar estudiante**

Method: `DELETE`

Route:
```
/api/students/{id_estudiante}
```

* **Añadir estudiante a una clase**

Method: `POST`

Route:
```
/api/students/{id_estudiante}/classrooms/{id_clase}
```

* **Remover estudiante de una clase**

Method: `DELETE`

Route:
```
/api/students/{id_estudiante}/classrooms/{id_clase}
```

### Profesores

* **Obtener todos los profesores**

Method: `GET`

Route:
```
/api/professors
```

* **Obtener todos los profesores filtrado por nombre**

Method: `GET`

Route:
```
/api/professors?name={nombre}
```

* **Obtener profesor**

Method: `GET`

Route:
```
/api/professors/{id_profesor}
```

* **Crear profesor**

Method: `POST`

Request Body:
```json
{
    "names": "nombres_del_profesor",
    "surnames": "apellidos_del_profesor",
    "dni": "dni_del_profesor",,
    "birthdate": "fecha_de_nacimiento_del_profesor",
    "phone": "teléfono_del_profesor",
    "address": "dirección_del_profesor",
}
```

Route:
```
/api/professors
```

* **Editar profesor**

Method: `PUT`

Request Body:
```json
{
    "names": "nombres_del_profesor",
    "surnames": "apellidos_del_profesor",
    "dni": "dni_del_profesor",,
    "birthdate": "fecha_de_nacimiento_del_profesor",
    "phone": "teléfono_del_profesor",
    "address": "dirección_del_profesor",
}
```

Route:
```
/api/professors/{id_profesor}
```

* **Eliminar profesor**

Method: `DELETE`

Route:
```
/api/professors/{id_profesor}
```

* **Asignar una clase a un profesor**

Method: `POST`

Route:
```
/api/professors/{id_profesor}/classrooms/{id_clase}
```

* **Remover una clase a un profesor**

Method: `DELETE`

Route:
```
/api/professors/{id_profesor}/classrooms/{id_clase}
```
