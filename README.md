Personal Page - Aplicación web personal completa con blog y gestión.

Esta es una aplicación web que consta de dos partes: una aplicación principal y una aplicación
secundaria para el blog.
La aplicación principal contiene páginas como Home, Portfolio, Resume y Contact. La aplicación del
blog incluye funcionalidades como
creación de posts, edición, login, registro, y visualización de posts.
Ambas aplicaciones están construidas con React para el frontend y utilizan Node.js con Express y
MongoDB para el backend.
Cómo Ejecutar la Aplicación:
1. Asegúrese de tener Node.js y MongoDB instalados en su sistema.

2. Clonar el repositorio de GitHub a su máquina local.

3. Navegar al directorio 'client' e instalar las dependencias del frontend ejecutando:
 ```
 npm install
 ```

4. Para ejecutar el frontend, use:
 ```
 npm start
 ```

5. Navegar al directorio 'server' e instalar las dependencias del backend ejecutando:
 ```
 npm install
 ```

6. Cree un archivo .env en el directorio raiz de 'server' con las siguientes claves (modificar con sus propios
valores):
 ```
 MONGO_URI=mongodb://localhost:27017/BlogIa
 DEV_EMAIL=admin@gmail.com
 DEV_PASSWORD=1234
 PORT=5000
 JWT_SECRET=tu_clave_secreta
 ACCESS_TOKEN_SECRET=clavesecreta
 CLOUDINARY_CLOUD_NAME=dtsneudy9
 CLOUDINARY_API_KEY=666164155874253
 CLOUDINARY_API_SECRET=99tsTFUKu72BY7PV2C2nEx6kdnY
 OPENAI_API_KEY=la_api_key
 ```

8. Para ejecutar el backend, use:
 ```
 nodemon index.js
 ```

9. La aplicación estará disponible en 'http://localhost:3000' para el frontend y 'http://localhost:5000'
para el backend.

Dependencias Importantes:
- Frontend:
 - React
 - React Router
 - Axios
 - React Intl
 - React Quill
 - Tailwind CSS
- Backend:
 - Express
 - Mongoose
 - Cloudinary
 - JWT
 - Nodemon
 - Multer

Estructura de Archivos:
- client/
 - src/
 - App.js
 - Blog.js
 - index.js
- server/
 - routes/
 - models/
 - index.js

 Versión: 1.0.0

Créditos:
Desarrollado por Julian Molineris. Para más información, consulte el repositorio de GitHub.