## Rutas API

### Autenticación

Login

Method: `POST`

```
/api/auth/login
```

Registro

Method: `POST`

```
/api/auth/register
```

### Clases

Obtener todos las clases

Method: `GET`

```
/api/classrooms/
```

Obtener todos las clases filtradas por descripción

Method: `GET`

```
/api/classrooms?description={descripcion}
```

Crear clase

Method: `POST`

```
/api/classrooms
```

Editar clase

Method: `PUT`

```
/api/classrooms/{id_clase}
```

Eliminar clase

Method: `DELETE`

```
/api/classrooms/{id_clase}
```

### Estudiantes

Obtener todos los estudiantes

Method: `GET`

```
/api/students
```

Obtener todos los estudiantes filtrado por nombre y clase

Method: `GET`

```
/api/students?name={nombre}&idClass={id_clase}
```

Obtener estudiante

Method: `GET`

```
/api/students/{id_estudiante}
```

Crear estudiante

Method: `POST`

```
/api/students
```

Editar estudiante

Method: `PUT`

```
/api/students/{id_estudiante}
```

Eliminar estudiante

Method: `DELETE`

```
/api/students/{id_estudiante}
```

Añadir estudiante a una clase

Method: `POST`

```
/api/students/{id_estudiante}/classrooms/{id_clase}
```

Remover estudiante de una clase

Method: `DELETE`

```
/api/students/{id_estudiante}/classrooms/{id_clase}
```

### Profesores

Obtener todos los profesores

Method: `GET`

```
/api/professors
```

Obtener todos los profesores filtrado por nombre

Method: `GET`

```
/api/professors?name={nombre}
```

Obtener profesor

Method: `GET`

```
/api/professors/{id_profesor}
```

Crear profesor

Method: `POST`

```
/api/professors
```

Editar profesor

Method: `PUT`

```
/api/professors/{id_profesor}
```

Eliminar profesor

Method: `DELETE`

```
/api/professors/{id_profesor}
```

Asignar una clase a un profesor

Method: `POST`

```
/api/professors/{id_profesor}/classrooms/{id_clase}
```

Remover una clase a un profesor

Method: `DELETE`

```
/api/professors/{id_profesor}/classrooms/{id_clase}
```

