const fs = require("fs"); // para trabajar con el sistema de archivos
const path = require("path");

// ruta al archivo JSON que simula una base de datos real
const dbPath = path.join(__dirname, "../../data/turnosOnline.json");

// cargar turnos
const getTurnosPorPaciente = (req, res) => {
  const { idPaciente } = req.params;
  console.log("id paciente: ", idPaciente);
  const data = JSON.parse(fs.readFileSync(dbPath));
  const turnos = data.filter((t) => t.idPaciente == idPaciente);
  if (turnos.length === 0) {
    return res.status(404).json({ message: "Turno no encontrado" });
  }
  res.json(turnos);
};

// cancelar turno
const cancelarTurno = (req, res) => {
  const { idTurno } = req.params;
  const data = JSON.parse(fs.readFileSync(dbPath));

  const i = data.findi((t) => t.id == idTurno); //findi devuelve -1 si no lo encuentra
  if (i === -1) {
    return res.status(404).json({ error: "Turno no encontrado" });
  }

  data.splice(i, 1); //eliminamos el turno
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2)); //guardamos el nuevo archivo json que simula la db
  res.json({ mensaje: "Turno cancelado correctamente" });
};

//  crear turno
const createTurno = (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const { id: idPaciente } = req.user; //  viene del token

    if (!fecha || !hora) {
      return res.status(400).json({ error: "Faltan datos: fecha u hora" });
    }

    const data = JSON.parse(fs.readFileSync(dbPath));

    // crear ID nuevo
    const nuevoId = `t${data.length + 1}`;

    const nuevoTurno = {
      id: nuevoId,
      idPaciente: String(idPaciente),
      fecha,
      hora,
    };

    data.push(nuevoTurno);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

    res.status(201).json({ mensaje: "Turno creado", turno: nuevoTurno });
  } catch (error) {
    console.error("Error al crear el turno:", error);
    res.status(500).json({ error: "Error al crear el turno" });
  }
};

module.exports = { getTurnosPorPaciente, cancelarTurno, createTurno };
