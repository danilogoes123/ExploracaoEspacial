import { Router } from "express";
import * as usuariosController from "../controllers/usuariosController";

const router = Router();

router.post("/registro", usuariosController.registrarUsuario);
router.post("/login", usuariosController.loginUsuario);

export default router;
