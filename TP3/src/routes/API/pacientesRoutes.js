const { Router } = require("express");
const pacientesController = require("../../controllers/API/pacientesControllers.js");
const {
  verifyTokenMiddleware,
} = require("../../middlewares/verifyToken.middleware.js");
const rutaPacientes = Router();
rutaPacientes.get("/", verifyTokenMiddleware, pacientesController.list);
rutaPacientes.post("/login", pacientesController.login);
rutaPacientes.post("/", verifyTokenMiddleware, pacientesController.create);
rutaPacientes.put("/:id", verifyTokenMiddleware, pacientesController.update);
rutaPacientes.delete("/:id", verifyTokenMiddleware, pacientesController.delete);

module.exports = rutaPacientes;
