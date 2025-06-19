const { Router } = require("express");
const { home } = require("../../controllers/home/homeControllers.js");

const rutaHome = Router();

rutaHome.get("/", (req, res) => {
  res.redirect("/home");
});

rutaHome.get("/home", home);

module.exports = rutaHome;
