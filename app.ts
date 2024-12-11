import express from "express";
import dotenv from "dotenv";
import missoesRoutes from "./routes/missoesRoutes";
import usuariosRoutes from "./routes/usuariosRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/missoes", missoesRoutes);
app.use("/usuarios", usuariosRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
