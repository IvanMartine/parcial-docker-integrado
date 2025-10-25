import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();
app.use(express.json());

const {
  DATABASE_URL,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  DB_HOST,
  DB_PORT
} = process.env;

const connectionString =
  DATABASE_URL ||
  `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DB_HOST}:${DB_PORT}/${POSTGRES_DB}`;

const pool = new Pool({
  connectionString,
});

// Endpoint raíz
app.get("/", (req, res) => {
  res.json({
    message: "API Ejercicio 3 - Compose OK",
    db_host: DB_HOST,
    db_port: DB_PORT,
  });
});

// Endpoint de salud del API
app.get("/health", (req, res) => {
  res.json({ status: "ok", time: new Date().toISOString() });
});

// Endpoint para comprobar conexión a la DB
app.get("/db-check", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT 1 as ok");
    res.json({ db: "ok", result: rows[0] });
  } catch (err) {
    res.status(500).json({ db: "error", error: err.message });
  }
});

// Crear tabla demo y probar inserción/lectura
app.post("/init", async (req, res) => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS demo (
        id SERIAL PRIMARY KEY,
        msg TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    const { rows } = await pool.query(
      "INSERT INTO demo (msg) VALUES ($1) RETURNING *",
      ["Hola desde API Ej3"]
    );
    const all = await pool.query("SELECT * FROM demo ORDER BY id DESC LIMIT 5");
    res.json({ created: rows[0], last5: all.rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ API escuchando en puerto ${PORT}`);
});

