# Cadáver Exquisito - API REST

Este es un proyecto de una API REST que simula el juego surrealista de creación colectiva, Cadáver Exquisito.

El proyecto permite a los usuarios ingresar palabras que luego se unirán para formar una frase. Los usuarios también pueden obtener la frase completa y eliminar palabras específicas. Además, la API se integra con un servicio externo para generar palabras aleatorias.

## Endpoints

- `POST /palabras`: ingresa una nueva palabra a la lista. La palabra no debe ser vacía y debe contener sólo caracteres alfabéticos. Devuelve el estado 200 si todo está bien o el estado 422 si la palabra no es válida.

- `GET /frase`: devuelve la frase completa formada por las palabras ingresadas.

- `DELETE /palabras/:palabra`: elimina una palabra específica de la lista. Si hay varias ocurrencias de la misma palabra, todas son eliminadas. Devuelve el estado 200 si la palabra se elimina correctamente, el estado 404 si la palabra no se encuentra y el estado 422 si la palabra no es válida.

- `GET /generar/:cantidad`: solicita a un servicio externo una cantidad específica de palabras aleatorias y las añade a la lista.

- `GET /informacion`: devuelve información sobre todas las palabras ingresadas hasta el momento, indicando cuántas veces aparece cada palabra en la frase completa.

## Pruebas

El proyecto incluye pruebas funcionales para verificar su correcto funcionamiento. Las pruebas se pueden ejecutar con el comando `npm test`.

## Instalación

Para instalar y correr el proyecto:

1. Clona este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto en tu terminal.
3. Ejecuta `npm install` para instalar las dependencias del proyecto.
4. Ejecuta `npm start` para iniciar el servidor.

La API estará disponible en `http://localhost:3000`.

## Thunder client | Postman

Se agrego un JSON con las URLS correctas de los endpoints
