Proyecto: API de Adopción de Mascotas con GraphQL
Esta es una API desarrollada con NestJS que utiliza GraphQL para gestionar un sistema de adopción de mascotas. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las entidades principales del sistema, siguiendo una arquitectura por capas bien definida.

Entidades del Proyecto 🐾
El modelo de datos se centra en tres entidades principales que interactúan entre sí:

Mascota: Representa a los animales disponibles para adopción. Contiene información como nombre, especie, raza, edad, descripción y estado de adopción.

Adoptante: Representa a las personas que desean adoptar. Almacena datos como nombre, email, dirección y documentos.

HistorialAdoptante: Actúa como un registro que conecta a un Adoptante con una Mascota, formalizando el evento de la adopción y guardando datos relevantes como la fecha.

Tecnologías Utilizadas 🛠️
NestJS: Framework de Node.js para construir aplicaciones eficientes y escalables.

GraphQL: Lenguaje de consulta para APIs que permite a los clientes solicitar exactamente los datos que necesitan.

TypeORM: ORM para TypeScript y JavaScript que facilita la interacción con la base de datos.

SQLite: Sistema de gestión de bases de datos basado en archivos, ideal para desarrollo.

TypeScript: Superset de JavaScript que añade tipado estático.

Instrucciones de Instalación y Ejecución
Sigue estos pasos para levantar el proyecto en un entorno de desarrollo local.

1. Clonar el Repositorio

git clone https://github.com/Alex-20KD/PracticasParcial2.git

cd PracticasParcial2

2. Instalar Dependencias

npm install

3. Configurar Variables de Entorno
Este proyecto está configurado para ejecutarse con SQLite en desarrollo. Renombra el archivo .env.example a .env y asegúrate de que contenga las siguientes variables:

Fragmento de código

# Tipo de base de datos
DB_TYPE=sqlite

# Nombre del archivo que contendrá la base de datos
DB_DATABASE=db.sqlite

# Sincronización de esquema (poner en 'false' para producción)
DB_SYNCHRONIZE=true

4. Ejecutar la Aplicación
Inicia el servidor en modo de desarrollo. El servidor detectará el archivo .env y se conectará a la base de datos SQLite.

npm run start:dev

5. Acceder al Playground de GraphQL
Una vez que la aplicación esté corriendo, abre tu navegador y ve a http://localhost:3000/graphql para interactuar con la API.

API GraphQL - Operaciones Disponibles
A continuación se muestran ejemplos de las queries y mutations disponibles para cada entidad.

Entidad: Adoptante
Queries
GraphQL

# Obtener todos los adoptantes
query {
  adoptantes {
    id
    name
    email
  }
}

# Obtener un adoptante por su ID
query {
  adoptante(id: "tu-id-de-adoptante") {
    id
    name
    email
    mascotas {
      id
      name
    }
  }
}
Mutations
GraphQL

# Crear un nuevo adoptante
mutation {
  createAdoptante(createAdoptanteInput: {
    name: "Nombre Completo",
    email: "correo@example.com",
    telefono: 123456789,
    direccion: "Dirección de ejemplo",
    tipo_documento: "Cédula",
    numero_documento: 1234567890
  }) {
    id
    name
  }
}

# Actualizar un adoptante
mutation {
  updateAdoptante(updateAdoptanteInput: {
    id: "tu-id-de-adoptante",
    email: "nuevo_correo@example.com"
  }) {
    id
    email
  }
}

# Eliminar un adoptante
mutation {
  removeAdoptante(id: "tu-id-de-adoptante") {
    id
  }
}
Entidad: Mascota
Queries
GraphQL

# Obtener todas las mascotas
query {
  mascotas {
    id
    name
    especie
  }
}

# Obtener una mascota por su ID
query {
  mascota(id: "tu-id-de-mascota") {
    id
    name
    adoptante {
      id
      name
    }
  }
}
Mutations
GraphQL

# Crear una nueva mascota
mutation {
  createMascota(createMascotaInput: {
    name: "Nombre Mascota",
    especie: "Perro",
    raza: "Mestizo",
    edad: 3,
    genero: "Macho",
    descripcion: "Descripción de la mascota",
    foto_url: "http://example.com/foto.jpg"
  }) {
    id
    name
  }
}

# Actualizar una mascota (ej. para asignarla a un adoptante)
mutation {
  updateMascota(updateMascotaInput: {
    id: "tu-id-de-mascota",
    adoptanteId: "tu-id-de-adoptante"
  }) {
    id
    name
  }
}

# Eliminar una mascota
mutation {
  removeMascota(id: "tu-id-de-mascota") {
    id
  }
}
Entidad: HistorialAdoptante
Queries
GraphQL

# Obtener todos los historiales
query {
  historialAdoptantes {
    id
    fecha_adopcion
    adoptante {
      name
    }
    mascota {
      name
    }
  }
}

# Obtener un historial por su ID
query {
  historialAdoptante(id: "tu-id-de-historial") {
    id
    fecha_adopcion
  }
}
Mutations
GraphQL

# Crear un nuevo registro de historial (conecta un adoptante y una mascota)
mutation {
  createHistorialAdoptante(createHistorialAdoptanteInput: {
    adoptanteId: "tu-id-de-adoptante",
    mascotaId: "tu-id-de-mascota",
    fecha_adopcion: "2025-07-03"
  }) {
    id
    fecha_adopcion
  }
}

# Eliminar un historial
mutation {
  removeHistorialAdoptante(id: "tu-id-de-historial") {
    id
  }
}