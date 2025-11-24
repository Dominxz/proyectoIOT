// estadoCtrl.js

// Variable temporal en memoria (no en BD)
let usuarioActual = null;

// La app enviará el usuario aquí después del login
export const setUsuarioActivo = async (req, res) => {
  try {
    const { nombre_usuario } = req.body;

    if (!nombre_usuario) {
      return res.status(400).json({ message: "Falta el nombre de usuario" });
    }

    usuarioActual = nombre_usuario;
    console.log("Usuario activo actualizado:", usuarioActual);

    res.json({ message: "Usuario activo actualizado", usuario: usuarioActual });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar usuario activo", error });
  }
};

// El ESP32 consultará esto para mostrarlo en la pantalla OLED
export const getUsuarioActivo = async (req, res) => {
  try {
    res.json({ usuario: usuarioActual });
  } catch (error) {
    res.status(500).json({ message: "Error consultando usuario activo", error });
  }
};
