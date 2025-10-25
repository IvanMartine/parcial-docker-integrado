# Ejercicio 3 – Integración completa con Docker Compose

## Objetivo
Integrar los servicios **API (Node.js)** y **DB (PostgreSQL)** usando un archivo `docker-compose.yml` con red, volumen y healthcheck.  
El objetivo es demostrar la comunicación entre contenedores y la correcta configuración del entorno.

-----------------------------------

# Construir y levantar los servicios
docker compose up -d --build

# Verificar contenedores activos
docker compose ps

# Revisar logs
docker compose logs api

# Probar endpoints
curl http://localhost:3000/health
curl http://localhost:3000/db-check
curl -X POST http://localhost:3000/init
