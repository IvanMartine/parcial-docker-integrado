# Ejercicio 2 – Persistencia con PostgreSQL y Volumen

## Objetivo
Ampliar el proyecto agregando una base de datos PostgreSQL con **persistencia** usando un **volumen named**.

## Variables de entorno usadas
- `POSTGRES_USER=admin`
- `POSTGRES_PASSWORD=12345`
- `POSTGRES_DB=parcial_db`

## Pasos ejecutados

### 1) Crear volumen
```bash
docker volume create db_data
docker volume ls | grep db_data

