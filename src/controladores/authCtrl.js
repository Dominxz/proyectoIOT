import { conmysql } from "../db.js";
import bcrypt from "bcryptjs";

export const register = async (req, res) => {
  try {
    const { nombre_usuario, password } = req.body;

    if (!nombre_usuario || !password)
      return res.status(400).json({ message: "Faltan datos" });

    const [exist] = await conmysql.query(
      "SELECT id FROM usuarios WHERE nombre_usuario = ?",
      [nombre_usuario]
    );

    if (exist.length > 0)
      return res.status(400).json({ message: "El usuario ya existe" });

    const hash = await bcrypt.hash(password, 10);

    const [result] = await conmysql.query(
      "INSERT INTO usuarios (nombre_usuario, password_hash) VALUES (?,?)",
      [nombre_usuario, hash]
    );

    res.status(201).json({
      message: "Usuario registrado",
      usuario_id: result.insertId,
    });

  } catch (error) {
    res.status(500).json({ message: "Error al registrar usuario", error });
  }
};


export const login = async (req, res) => {
  const { nombre_usuario, password } = req.body;

  // buscar usuario
  const [users] = await conmysql.query(
    "SELECT * FROM usuarios WHERE nombre_usuario = ?",
    [nombre_usuario]
  );

  if (users.length === 0) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  const usuario = users[0];

  // validar contraseña
  const ok = await bcrypt.compare(password, usuario.password_hash);
  if (!ok) {
    return res.status(400).json({ message: "Contraseña incorrecta" });
  }

  res.json({ 
    message: "Login correcto",
    usuario: {
      id: usuario.id,
      nombre_usuario: usuario.nombre_usuario
    }
  });
};