const express = require('express');
const app = express();
const PORT = 3000;

// Endpoint principal con información del estudiante
app.get('/', (req, res) => {
  res.json({
    nombre: 'Iván de Jesús Paiz Martínez',
    carrera: 'Ingeniería en Sistemas',
    universidad: 'Universidad de Sonsonate'
  });
});

// Endpoint de salud del servicio
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
