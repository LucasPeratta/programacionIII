const { Router } = require("express");
const {
  renderListaTurnos,
  renderFormularioNuevoTurno,
  crearTurno,
  eliminarTurno,
} = require("../controllers/views/turnosLocal.controller");

const router = Router();

router.get("/", renderListaTurnos);

router.get("/nuevo", renderFormularioNuevoTurno);

router.post("/nuevo", crearTurno);

// Eliminar turno
router.post("/eliminar/:idTurno", eliminarTurno);

module.exports = router;
