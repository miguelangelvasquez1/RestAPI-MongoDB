# REST API con Node.js y MongoDB

## Descripción

Este proyecto es una API REST construida con Node.js y MongoDB. La API proporciona funcionalidades para el registro de usuarios, inicio de sesión, y autenticación mediante JSON Web Tokens (JWT). Está diseñada para servir como base para aplicaciones que requieran autenticación y autorización de usuarios.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL para el almacenamiento de datos.
- **Mongoose**: Biblioteca de modelado de datos de MongoDB para Node.js.
- **bcryptjs**: Biblioteca para el hash de contraseñas.
- **jsonwebtoken (JWT)**: Biblioteca para crear y verificar tokens JWT.

## Instalación

1. **Clonar el Repositorio**

   ```bash
   git clone <URL_DEL_REPOSITORIO>

2. **Navegar al Directorio del Proyecto**

    cd nombre-del-proyecto

3. **Instalar Dependencias**

    npm install

4. **Configurar Variables de Entorno**

    Crea un archivo .env en la raíz del proyecto y define las siguientes variables:

    MONGO_URI=mongodb://localhost:27017/tu_base_de_datos
    SECRET_KEY=tu_clave_secreta

5. **Iniciar la aplicación**

    npm start

## Endpoints

**Registro de Usuario**

- Ruta: ¨POST /api/auth/register
- Descripción: Registra un nuevo usuario y devuelve un token JWT
- Cuerpo de la solicitud:
    {
    "email": "usuario@example.com",
    "password": "tu_contraseña"
    }

**Inicio de Sesión**

- Ruta: POST /api/auth/login
- Descripción: Inicia sesión con un usuario existente y devuelve un token JWT.
- Cuerpo de la solicitud:
    {
    "email": "usuario@example.com",
    "password": "tu_contraseña"
    }

**Obtener Perfil del Usuario**

- Ruta: GET /api/user/profile
- Descripción: Obtiene la información del perfil del usuario autenticado.
- Encabezado de la solicitud:
    Authorization: Bearer <tu_token_jwt>