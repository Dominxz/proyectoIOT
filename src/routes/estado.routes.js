import { Router } from "express";
import {
  setUsuarioActivo,
  getUsuarioActivo,
  setClaveFinal,
  getClaveFinal
} from "../controladores/estadoCtrl.js";

const router = Router();

// App móvil llama después del login
router.post("/usuario/activo", setUsuarioActivo);

// ESP32 consulta cada pocos segundos
router.get("/usuario/activo", getUsuarioActivo);

// 🔥 Nueva clave final
router.post("/final/clave", setClaveFinal);
router.get("/final/clave", getClaveFinal);

export default router;
