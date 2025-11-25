import { Router } from "express";
import { obtenerContrasenaFinal } from "../controladores/finalCtrl.js";

const router = Router();

router.get("/final", obtenerContrasenaFinal);

export default router;
