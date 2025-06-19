const { Router } = require("express");
const {
  renderListaTurnos,
  renderFormularioNuevoTurno,
  crearTurno,
  eliminarTurno,
} = require("../../controllers/views/turnosLocalControllers");

const router = Router();

router.get("/", renderListaTurnos);

router.get("/nuevo", renderFormularioNuevoTurno);

router.post("/nuevo", crearTurno);

router.post("/eliminar/:idTurno", eliminarTurno);

module.exports = router;
