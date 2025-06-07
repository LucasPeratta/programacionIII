const { Router } = require("express");
const { home } = require("../controllers/home/home.controller.js");

const rutaHome = Router();

rutaHome.get("/", (req, res) => {
  res.redirect("/home"); // redirige directamente al home
});

rutaHome.get("/home", home); // pagina principal con botones principales

module.exports = rutaHome;
