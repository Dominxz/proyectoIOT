import { Router } from "express";
import {
  getCategorias,
  getCategoriaById,
  postCategoria
} from "../controladores/categoriasCtrl.js";

const router = Router();

router.get("/categorias", getCategorias);
router.get("/categorias/:id", getCategoriaById);
router.post("/categorias", postCategoria);

export default router;
