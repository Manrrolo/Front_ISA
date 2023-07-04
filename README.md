## Consideraciones

La reglas de negocio están descritas en la parte inferior de la página 'Como jugar'. Estas reglas
fueron hechas de acuerdo a como tenemos estructurado el juego en este momento. Por esto, pueden
cambiar en el futuro.

En el diagrama entidad/relación no se agregaron los atributos 'createdAt' y 'updatedAt' que 
aparecen en las tablas de postgres. Además, el diagrama solo muestra los modelos de nuestro progreso.

El diagrama se encuentra en la carpeta docs.

## Documento Endpoint

https://documenter.getpostman.com/view/23885025/2s8YmLw3su

## Tutorial de uso de la aplicación disponible en:

https://www.youtube.com/watch?v=inWagCFA1M8


## Repositorio de servidor

https://github.com/IIC2513-2022-2/grupo-Asado-Familiar-backend

## Indicaciones sobre la visualización de la aplicación

La aplicación se debe correr en el localhost. Debe crear un archivo .env con la siguiente información
en el frontend

```console
REACT_APP_SERVER_URL = "http://localhost:3005"
REACT_APP_API_URL = "http://localhost:3005"
```
Luego se debe escribir en la consola 

```console
npm start
```

Puede suceder que arroje error al escribir el comando anterior. En ese caso debe escribir npm
install y luego correr npm start.

Importante: el nodo que se utiliza es de version 14. En caso de no tener esa versión puede usar el código

```console
nvm use 14
```



Para el backend debe crear un archivo .env con la siguiente información:

```console
DB_USER = "usuario"
DB_PASSWORD = "contraseña"
DB_NAME = "werlin"
DB_HOST = "127.0.0.1"
PORT = "3005"
```
Debe llenar usuario y contraseña con sus datos y dejarlos en comillas.

Luego debe modificar el nodo si es que no lo tiene en la versión 14 usando el código 

```console
nvm use 14
```

Luego, se debe abrir el puerto con 

```console
sudo service postgresql start
```

Finalmente, debe correr los siguientes códigos

```console
yarn install
yarn dev
```
