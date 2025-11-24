import { Router } from "express";
import {
  setUsuarioActivo,
  getUsuarioActivo
} from "../controladores/estadoCtrl.js";

const router = Router();

// App móvil llama después del login
router.post("/usuario/activo", setUsuarioActivo);

// ESP32 consulta cada pocos segundos
router.get("/usuario/activo", getUsuarioActivo);

export default router;
