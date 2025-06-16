const express = require("express");
const router = express.Router();
const { getPersonas } = require("../controllers/personaController");

router.get("/", getPersonas);

module.exports = router;
