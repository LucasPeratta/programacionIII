const express = require("express");
const cors = require("cors");
const app = express();

const personaRoutes = require("./routes/personaRoutes");

const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use("/personas", personaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
