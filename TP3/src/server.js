const express = require("express");
const dotenv = require("dotenv");

const rutaTurnosOnline = require("./routes/API/turnosOnlineRoutes.js");
const rutaTurnosLocal = require("./routes/views/turnosLocalRoutes.js");

const rutaPacientesOnline = require("./routes/API/pacientesRoutes.js");
const rutaPacienteslocal = require("./routes/views/pacientesRoutes.js");

const home = require("./routes/home/homeRoutes.js");

const morgan = require("morgan");

dotenv.config();

class Server {
  constructor(template = process.env.TEMPLATE || "ejs") {
    this.app = express();
    this.port = process.env.PORT || 3001;
    this.middleware();

    this.engine(template);
    this.rutas();
  }

  engine(template) {
    try {
      require.resolve(template);

      this.app.set("view engine", template);
      this.app.set("views", "./src/views/" + template || "ejs");
    } catch (error) {
      console.log("Error al configurar el motor de plantillas:", template);
    }
  }
  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
  }

  rutas() {
    this.app.use("/api/v1/pacientes", rutaPacientesOnline);
    this.app.use("/api/v1/turnosOnline", rutaTurnosOnline);
    this.app.use("/turnoslocal", rutaTurnosLocal);
    this.app.use("/pacientelocal", rutaPacienteslocal);

    this.app.use("/", home);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      );
    });
  }
}

module.exports = Server;
