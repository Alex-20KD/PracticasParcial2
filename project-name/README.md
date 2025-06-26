API de Gestión de Adopciones de Mascotas
Esta es una API RESTful construida con NestJS, TypeORM y SQLite para gestionar un sistema simple de adopción de mascotas. Permite administrar las entidades de Adoptantes, Mascotas y el Historial de Adopciones.

Requisitos Previos
Node.js (v18 o superior recomendado)

npm (usualmente instalado con Node.js)

Instalación y Ejecución
Clonar el repositorio:

git clone <URL_DE_TU_REPOSITORIO_GIT>

Navegar a la carpeta del proyecto:

cd <project-name>

Instalar las dependencias:

npm install

Ejecutar el proyecto en modo de desarrollo:

npm run start:dev

La API estará disponible en http://localhost:3000. La base de datos SQLite (db.sqlite) se creará automáticamente en la raíz del proyecto al iniciar la aplicación por primera vez.

Documentación de la API (Endpoints)
A continuación se muestran ejemplos curl para probar cada uno de los 15 endpoints implementados.

🐾 Entidad: Mascotas
Ruta base: /api/mascotas

1. Crear una nueva mascota

curl -X POST http://localhost:3000/api/mascotas \
-H "Content-Type: application/json" \
-d '{
    "name": "Luna",
    "specie": "Gato",
    "raza": "Siames",
    "edad": 1,
    "genero": "Hembra",
    "descripcion": "Gatita tranquila y cariñosa.",
    "estado_salud": 10,
    "foto_url": "http://example.com/luna.jpg"
}'

2. Obtener todas las mascotas disponibles

curl -X GET http://localhost:3000/api/mascotas

3. Obtener una mascota por su ID

# Cambia el '1' por el ID de la mascota que desees buscar
curl -X GET http://localhost:3000/api/mascotas/1

4. Actualizar una mascota

# Cambia el '1' por el ID de la mascota que desees actualizar
curl -X PATCH http://localhost:3000/api/mascotas/1 \
-H "Content-Type: application/json" \
-d '{
    "descripcion": "Gatita muy tranquila y cariñosa, ideal para apartamentos."
}'

5. Eliminar una mascota (borrado lógico)

# Cambia el '1' por el ID de la mascota que desees eliminar
curl -X DELETE http://localhost:3000/api/mascotas/1

👤 Entidad: Adoptantes
Ruta base: /api/adoptantes

6. Crear un nuevo adoptante

curl -X POST http://localhost:3000/api/adoptantes \
-H "Content-Type: application/json" \
-d '{
    "name": "Ana Pérez",
    "email": "ana.perez@example.com",
    "telefono": 123456789,
    "direccion": "Calle Falsa 123",
    "tipo_documento": "Cédula",
    "numero_documento": 987654321
}'

7. Obtener todos los adoptantes activos

curl -X GET http://localhost:3000/api/adoptantes

8. Obtener un adoptante por su ID

# Cambia el '1' por el ID del adoptante
curl -X GET http://localhost:3000/api/adoptantes/1

9. Actualizar un adoptante

# Cambia el '1' por el ID del adoptante
curl -X PATCH http://localhost:3000/api/adoptantes/1 \
-H "Content-Type: application/json" \
-d '{
    "telefono": 999888777
}'

10. Eliminar un adoptante (borrado lógico)

# Cambia el '1' por el ID del adoptante
curl -X DELETE http://localhost:3000/api/adoptantes/1

📜 Entidad: Historial de Adoptantes
Ruta base: /api/historial-adoptantes

11. Crear un nuevo registro en el historial

curl -X POST http://localhost:3000/api/historial-adoptantes \
-H "Content-Type: application/json" \
-d '{
    "solicitud_id": 101,
    "adopciones_permanentes": 1,
    "adopciones_temporales": 0,
    "fecha_ultima_adopcion": "2025-06-27",
    "calificacion": 5,
    "notas": "Proceso de adopción excelente."
}'

12. Obtener todos los registros del historial

curl -X GET http://localhost:3000/api/historial-adoptantes

13. Obtener un registro del historial por su ID

# Cambia el '1' por el ID del historial
curl -X GET http://localhost:3000/api/historial-adoptantes/1

14. Actualizar un registro del historial

# Cambia el '1' por el ID del historial
curl -X PATCH http://localhost:3000/api/historial-adoptantes/1 \
-H "Content-Type: application/json" \
-d '{
    "calificacion": 4,
    "notas": "Proceso de adopción excelente. Se realizó seguimiento posterior."
}'

15. Eliminar un registro del historial (borrado físico)

# Cambia el '1' por el ID del historial
curl -X DELETE http://localhost:3000/api/historial-adoptantes/1

{
	"info": {
		"_postman_id": "ab6f87cc-a15a-47a6-a58c-4eff91b02e8a",
		"name": "API Rest Adopcion Mascota",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "45590952"
	},
	"item": [
		{
			"name": "http://localhost:3000/api/mascota",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"solicitud_id\": 3,\r\n  \"adopciones_permanentes\": 2,\r\n  \"adopciones_temporales\": 0,\r\n  \"fecha_ultima_adopcion\": \"2025-01-15\",\r\n  \"calificacion\": 5,\r\n  \"notas\": \"Excelente adoptante, siempre responsable.\"\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/mascota",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"mascota"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:3000/api/historial-adoptante",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": ""
				},
				"url": {
					"raw": "http://localhost:3000/api/historial-adoptante",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"historial-adoptante"
					]
				}
			},
			"response": []
		},
		{
			"name": "http://localhost:3000/api/adoptante",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\r\n  \"name\": \"Gonzalo\",\r\n  \"email\": \"Gonza@example.com\",\r\n  \"telefono\": 987654321,\r\n  \"direccion\": \"Av. 10\",\r\n  \"tipo_documento\": \"DNI\",\r\n  \"numero_documento\": 12345678\r\n}\r\n",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "http://localhost:3000/api/adoptante",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"port": "3000",
					"path": [
						"api",
						"adoptante"
					]
				}
			},
			"response": []
		}
	]
}
