import pool from "../config/database";
import bcrypt from "bcryptjs";

export const criarUsuario = async (usuario: any) => {
  const { nome, email, senha } = usuario;
  const hashedPassword = await bcrypt.hash(senha, 10);
  const result = await pool.query(
    `INSERT INTO usuarios (nome, email, senha) VALUES ($1, $2, $3) RETURNING *`,
    [nome, email, hashedPassword],
  );
  return result.rows[0];
};

export const buscarUsuarioPorEmail = async (email: string) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
    email,
  ]);
  return result.rows[0] || null;
};
