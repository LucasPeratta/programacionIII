# 🏥 Clínica Salud+ - Proyecto Fullstack

Este proyecto es una aplicación web para la gestión de **pacientes** y **turnos médicos**, desarrollada con:

- Backend en **Node.js** con **Express**
- Frontend basado en **plantillas EJS**
- Persistencia temporal en memoria o mediante archivos `.json`

## ⚙️ Requisitos

Antes de correr el proyecto, asegurate de tener instalado:

- Node.js (v14 o superior)
- npm (v6 o superior)

## 🔧 Instalación y ejecución

1. Cloná el repositorio
   cd tp3

2. Instalá las dependencias
   npm install

3. Configurá las variables de entorno

   Creá un archivo `.env` en la raíz con el siguiente contenido:

   TEMPLATE=ejs
   HOST=http://localhost
   PORT=3000
   SECRETE_WORD=lucas123
   EXPIRES_IN=2h

4. Levantá el servidor
   npm start

5. Accedé a la app
   - Ir a http://localhost:3000
   - Home principal: /home
   - Turnos: /turnoslocal
   - Pacientes: /pacientelocal

## 🧪 Datos precargados

La app tiene datos precargados para testeo:

### 👤 Pacientes:

[
{ "dni": "123456787", "nombre": "Sergio", "apellido": "Antozzi", "email": "email@gmail.com", "password": "12345" },
{ "dni": "234567891", "nombre": "María", "apellido": "González", "email": "maria@gmail.com", "password": "12345" },
{ "dni": "345678912", "nombre": "Lucas", "apellido": "Fernández", "email": "lucas@gmail.com", "password": "12345" },
{ "dni": "456789123", "nombre": "Carla", "apellido": "Martínez", "email": "carla@gmail.com", "password": "12345" }
]

### ⏰ Turnos:

Guardados en `/src/data/turnosLocal.json`
