import * as usuariosModel from "../models/usuariosModel";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const registrarUsuario = async (req: any, res: any) => {
  try {
    const usuario = await usuariosModel.criarUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário." });
  }
};

export const loginUsuario = async (req: any, res: any) => {
  try {
    const usuario = await usuariosModel.buscarUsuarioPorEmail(req.body.email);
    if (!usuario || !(await bcrypt.compare(req.body.senha, usuario.senha))) {
      return res.status(400).json({ error: "Credenciais inválidas." });
    }
    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao autenticar usuário." });
  }
};
