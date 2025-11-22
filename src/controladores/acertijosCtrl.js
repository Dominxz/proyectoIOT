import { conmysql } from "../db.js";

// GET todos
export const getAcertijos = async (req, res) => {
  try {
    const [rows] = await conmysql.query("SELECT * FROM acertijos");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener acertijos", error });
  }
};

// GET por categoría
export const getAcertijosxCategoria = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await conmysql.query(
      "SELECT * FROM acertijos WHERE categoria_id = ?",
      [id]
    );
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error filtrando acertijos", error });
  }
};

// GET por ID
export const getAcertijoById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await conmysql.query("SELECT * FROM acertijos WHERE id = ?", [id]);
    res.json(rows[0] || {});
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo acertijo", error });
  }
};

// POST crear
export const postAcertijo = async (req, res) => {
  try {
    const { categoria_id, pregunta, respuesta_correcta, dificultad } = req.body;

    const [result] = await conmysql.query(
      "INSERT INTO acertijos (categoria_id, pregunta, respuesta_correcta, dificultad) VALUES (?, ?, ?, ?)",
      [categoria_id, pregunta, respuesta_correcta, dificultad || 1]
    );

    res.status(201).json({ message: "Acertijo creado", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear acertijo", error });
  }
};
