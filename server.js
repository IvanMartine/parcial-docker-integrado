// server.js
import express from 'express';

const app = express();
const PORT = 3000;

// Endpoint raíz con tus datos personales
app.get('/', (req, res) => {
  res.json({
    nombre: 'Iván de Jesús Paiz Martínez',
    carrera: 'Ingeniería en Sistemas',
    universidad: 'Universidad de Sonsonate'
  });
});

// Endpoint de verificación de salud del servicio
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
