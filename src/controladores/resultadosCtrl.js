import { conmysql } from "../db.js";

// GET todos los resultados
export const getResultados = async (req, res) => {
  try {
    const [rows] = await conmysql.query(
      `SELECT r.*, u.nombre_usuario, c.nombre AS categoria
       FROM resultados r
       JOIN usuarios u ON r.usuario_id = u.id
       JOIN categorias c ON r.categoria_id = c.id
       ORDER BY r.tiempo_segundos ASC`
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo resultados", error });
  }
};

// GET resultados por usuario
export const getResultadosByUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await conmysql.query(
      `SELECT * FROM resultados WHERE usuario_id = ?`,
      [id]
    );

    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error filtrando resultados", error });
  }
};

// POST crear resultado
export const postResultado = async (req, res) => {
  try {
    const { usuario_id, categoria_id, tiempo_segundos } = req.body;

    const [result] = await conmysql.query(
      `INSERT INTO resultados (usuario_id, categoria_id, tiempo_segundos)
       VALUES (?, ?, ?)`,
      [usuario_id, categoria_id, tiempo_segundos]
    );

    res.status(201).json({ message: "Resultado guardado", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear resultado", error });
  }
};
