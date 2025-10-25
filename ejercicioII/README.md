# Ejercicio II – Persistencia con PostgreSQL y Volumen

## 🎯 Objetivo
Agregar una base de datos PostgreSQL en Docker con persistencia de datos usando un volumen nombrado.

## 🧱 Pasos principales
1. Crear volumen `db_data`.
2. Ejecutar contenedor PostgreSQL con variables de entorno.
3. Crear tabla `estudiantes` e insertar registros.
4. Validar persistencia tras reiniciar el contenedor.

## 🐘 Variables usadas
- POSTGRES_USER=admin  
- POSTGRES_PASSWORD=12345  
- POSTGRES_DB=parcial_db  

## 🧠 Comandos
Revisa [`comandos.txt`](./comandos.txt) para ver todo lo ejecutado.

## 🗄️ Script SQL
Está en [`script.sql`](./script.sql).

## ✅ Checklist
- [x] Contenedor PostgreSQL corriendo (`docker ps`)
- [x] Volumen `db_data` creado (`docker volume ls`)
- [x] Datos persisten tras reinicio
- [x] Variables de entorno aplicadas correctamente
- [x] README actualizado con comandos ejecutados

## 👨‍💻 Autor
Iván de Jesús Paiz Martínez – Ingeniería en Sistemas
