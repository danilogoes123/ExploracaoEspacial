import jwt from "jsonwebtoken";

export const autenticar = (req: any, res: any, next: any) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "Token não fornecido." });
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    next();
  } catch (error) {
    res.status(403).json({ error: "Token inválido." });
  }
};
