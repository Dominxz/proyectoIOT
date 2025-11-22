import { Router } from "express";
import {
  getAcertijos,
  getAcertijosxCategoria,
  getAcertijoById,
  postAcertijo
} from "../controladores/acertijosCtrl.js";

const router = Router();

router.get("/acertijos", getAcertijos);
router.get("/acertijos/categoria/:id", getAcertijosxCategoria);
router.get("/acertijos/:id", getAcertijoById);
router.post("/acertijos", postAcertijo);

export default router;
