const express = require("express");
const router = express.Router();
const { getPersonas } = require("../controllers/personaController");

// Ruta GET
router.get("/", getPersonas);

module.exports = router;
