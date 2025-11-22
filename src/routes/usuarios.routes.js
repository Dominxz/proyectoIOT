import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  postUsuario
} from "../controladores/usuariosCtrl.js";

const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.post("/usuarios", postUsuario);

export default router;
