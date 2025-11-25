import { Router } from "express";
import {
  getUsuarios,
  getUsuarioById,
  postUsuario,
  setCategoriasCumplidas
} from "../controladores/usuariosCtrl.js";

const router = Router();

router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuarioById);
router.post("/usuarios", postUsuario);
router.put("/usuarios/categorias", setCategoriasCumplidas);
export default router;
