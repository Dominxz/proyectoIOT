import { conmysql } from "../db.js";

// GET todos los usuarios
export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await conmysql.query("SELECT * FROM usuarios");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo usuarios", error });
  }
};

// GET usuario por ID
export const getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await conmysql.query("SELECT * FROM usuarios WHERE id = ?", [id]);
    res.json(rows[0] || {});
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo usuario", error });
  }
};

// POST crear usuario
export const postUsuario = async (req, res) => {
  try {
    const { nombre_usuario, password_hash } = req.body;

    const [result] = await conmysql.query(
      `INSERT INTO usuarios (nombre_usuario, password_hash) VALUES (?, ?)`,
      [nombre_usuario, password_hash]
    );

    res.status(201).json({ message: "Usuario creado", id: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error al crear usuario", error });
  }
};


export const setCategoriasCumplidas = async (req, res) => {
  try {
    const { id, cumplidas } = req.body; 
    // cumplidas = 0 o 1

    if (typeof cumplidas === "undefined") {
      return res.status(400).json({ message: "Falta el estado 'cumplidas'" });
    }

    const [result] = await conmysql.query(
      "UPDATE usuarios SET categorias_cumplidas = ? WHERE id = ?",
      [cumplidas, id]
    );

    res.json({
      success: true,
      message: "Estado de categorías actualizado",
      actualizado: cumplidas
    });

  } catch (error) {
    res.status(500).json({ message: "Error actualizando categorías", error });
  }
};