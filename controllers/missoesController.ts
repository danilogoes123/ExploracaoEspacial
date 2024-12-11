import * as missoesModel from "../models/missoesModel";

export const listarMissoes = async (req: any, res: any) => {
  try {
    const missoes = await missoesModel.listarMissoes();
    res.json(missoes);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar missões." });
  }
};

export const criarMissao = async (req: any, res: any) => {
  try {
    const novaMissao = await missoesModel.criarMissao(req.body);
    res.status(201).json(novaMissao);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar missão." });
  }
};

export const excluirMissao = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await missoesModel.excluirMissao(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao excluir missão." });
  }
};
