import { conmysql } from "../db.js";

// GET todas las categorías
export const getCategorias = async (req, res) => {
  try {
    const [rows] = await conmysql.query("SELECT * FROM categorias");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo categorías", error });
  }
};

// GET categoría por ID
export const getCategoriaById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await conmysql.query("SELECT * FROM categorias WHERE id = ?", [id]);
    res.json(rows[0] || {});
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo categoría", error });
  }
};

// POST crear categoría
export const postCategoria = async (req, res) => {
  try {
    const { nombre, color } = req.body;

    const [result] = await conmysql.query(
      "INSERT INTO categorias (nombre, color) VALUES (?, ?)",
      [nombre, color]
    );

    res.status(201).json({ message: "Categoría creada", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear categoría", error });
  }
};
