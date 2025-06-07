const { Router } = require("express");
const {
  getTurnosPorPaciente,
  cancelarTurno,
  createTurno,
} = require("../controllers/API/turnosOnline.controller");

const {
  verifyTokenMiddleware,
} = require("../middlewares/verifyToken.middleware");

const rutaTurnos = Router();

rutaTurnos.get("/:idPaciente", getTurnosPorPaciente);

rutaTurnos.delete("/:idTurno", cancelarTurno);

rutaTurnos.post("/", verifyTokenMiddleware, createTurno);

module.exports = rutaTurnos;
