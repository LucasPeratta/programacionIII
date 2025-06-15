const express = require("express");
const cors = require("cors");
const app = express();

const personaRoutes = require("./routes/personaRoutes");

const PORT = 3000;

// Esto permite CORS desde frontend
app.use(cors());

app.use(express.json());

//rutas
app.use("/personas", personaRoutes);

// iniciar server
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
