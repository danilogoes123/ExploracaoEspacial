import { Router } from "express";
import * as missoesController from "../controllers/missoesController";
import { autenticar } from "../middlewares/autenticacao";

const router = Router();

router.get("/", missoesController.listarMissoes);
router.post("/", autenticar, missoesController.criarMissao);
router.delete("/:id", autenticar, missoesController.excluirMissao);

export default router;
