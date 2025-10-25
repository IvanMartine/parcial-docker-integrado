CREATE TABLE IF NOT EXISTS estudiantes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  carnet VARCHAR(50) UNIQUE NOT NULL,
  creado_en TIMESTAMP DEFAULT NOW()
);

INSERT INTO estudiantes (nombre, carnet)
VALUES
  ('Ivan de Jesús Paiz Martínez', 'USO-001'),
  ('María López', 'USO-002')
ON CONFLICT (carnet) DO NOTHING;

