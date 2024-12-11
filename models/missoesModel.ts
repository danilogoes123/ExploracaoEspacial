import pool from "../config/database";

export const criarMissao = async (missao: any) => {
  const {
    nomeMissao,
    planetaAlvo,
    duracaoAnos,
    quantidadeTripulantes,
    tecnologias,
  } = missao;
  const result = await pool.query(
    `INSERT INTO missoes (nome_missao, planeta_alvo, duracao_anos, quantidade_tripulantes, tecnologias) 
     VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [nomeMissao, planetaAlvo, duracaoAnos, quantidadeTripulantes, tecnologias],
  );
  return result.rows[0];
};

export const listarMissoes = async () => {
  const result = await pool.query("SELECT * FROM missoes");
  return result.rows;
};

export const excluirMissao = async (id: number) => {
  await pool.query("DELETE FROM missoes WHERE id = $1", [id]);
};
