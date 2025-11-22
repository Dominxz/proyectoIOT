import { Router } from "express";
import {
  getResultados,
  getResultadosByUsuario,
  postResultado
} from "../controladores/resultadosCtrl.js";

const router = Router();

router.get("/resultados", getResultados);
router.get("/resultados/usuario/:id", getResultadosByUsuario);
router.post("/resultados", postResultado);

export default router;
