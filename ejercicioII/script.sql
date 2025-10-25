CREATE TABLE IF NOT EXISTS estudiantes (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  carnet VARCHAR(20) UNIQUE NOT NULL
);

INSERT INTO estudiantes (nombre, carnet) VALUES
('Iván de Jesús Paiz Martínez', 'USO-001'),
('María López', 'USO-002'),
('Carlos Díaz', 'USO-003')
ON CONFLICT (carnet) DO NOTHING;

SELECT * FROM estudiantes;
