const Turno = require("../../models/API/Turno");

const getTurnosPorPaciente = (req, res) => {
  const { idPaciente } = req.params;
  const turnos = Turno.getByPacienteId(idPaciente);

  if (turnos.length === 0) {
    return res.status(404).json({ message: "Turno no encontrado" });
  }

  res.json(turnos);
};

const cancelarTurno = (req, res) => {
  const { idTurno } = req.params;
  const turnoEliminado = Turno.deleteById(idTurno);

  if (!turnoEliminado) {
    return res.status(404).json({ error: "Turno no encontrado" });
  }

  res.json({ mensaje: "Turno cancelado correctamente" });
};

const createTurno = (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const { userId: idPaciente } = req.user;

    if (!fecha || !hora) {
      return res.status(400).json({ error: "Faltan datos: fecha u hora" });
    }

    const nuevoTurno = Turno.createTurno(idPaciente, fecha, hora);
    res.status(201).json({ mensaje: "Turno creado", turno: nuevoTurno });
  } catch (error) {
    console.error("Error al crear el turno:", error);
    res.status(500).json({ error: "Error al crear el turno" });
  }
};

module.exports = { getTurnosPorPaciente, cancelarTurno, createTurno };
