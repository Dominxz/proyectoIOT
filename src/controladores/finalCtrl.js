import { conmysql } from "../db.js";

export const obtenerContrasenaFinal = async (req, res) => {
  try {
    const [rows] = await conmysql.query("SELECT clave FROM contrasena_final LIMIT 1");

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "No hay contraseña final registrada" });
    }

    return res.json({ success: true, clave: rows[0].clave });

  } catch (error) {
    console.error("Error obteniendo contraseña final:", error);
    res.status(500).json({ success: false, message: "Error del servidor" });
  }
};
