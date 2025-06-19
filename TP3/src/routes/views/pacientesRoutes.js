const express = require("express");
const router = express.Router();
const pacientesControllerViews = require("../../controllers/views/pacientesControllers");

router.get("/", pacientesControllerViews.renderListaPacientes);
router.post("/eliminar/:id", pacientesControllerViews.eliminarPaciente);

module.exports = router;
