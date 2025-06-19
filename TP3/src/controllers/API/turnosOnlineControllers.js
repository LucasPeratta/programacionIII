const fs = require("fs");
const path = require("path");
const Turno = require("../../models/API/Turno");

const dbPath = path.join(__dirname, "../data/turnosOnline.json");

//atajo
const readDB = () => JSON.parse(fs.readFileSync(dbPath));
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

const getTurnosPorPaciente = (req, res) => {
  const { idPaciente } = req.params;
  const data = readDB();
  const turnos = data.filter((t) => t.idPaciente === idPaciente);
  if (turnos.length === 0) {
    return res.status(404).json({ message: "Turno no encontrado" });
  }
  res.json(turnos);
};

const cancelarTurno = (req, res) => {
  const { idTurno } = req.params;
  const data = readDB();

  const index = data.findIndex((t) => t.id === idTurno);
  if (index === -1) {
    return res.status(404).json({ error: "Turno no encontrado" });
  }

  data.splice(index, 1);
  writeDB(data);

  res.json({ mensaje: "Turno cancelado correctamente" });
};

const createTurno = (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const { id: idPaciente } = req.user;

    if (!fecha || !hora) {
      return res.status(400).json({ error: "Faltan datos: fecha u hora" });
    }

    const data = readDB();
    const nuevoId = `t${data.length + 1}`;
    const nuevoTurno = new Turno(nuevoId, String(idPaciente), fecha, hora);

    data.push(nuevoTurno);
    writeDB(data);

    res.status(201).json({ mensaje: "Turno creado", turno: nuevoTurno });
  } catch (error) {
    console.error("Error al crear el turno:", error);
    res.status(500).json({ error: "Error al crear el turno" });
  }
};

module.exports = { getTurnosPorPaciente, cancelarTurno, createTurno };
