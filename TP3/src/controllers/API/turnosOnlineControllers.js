const Turno = require("../../models/API/Turno");

const getTurnosPorPaciente = async (req, res) => {
  try {
    const { idPaciente } = req.params;
    const turnos = await Turno.getByPacienteId(idPaciente);

    if (!turnos.length) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }

    res.json(turnos);
  } catch (error) {
    console.error("Error al obtener turnos:", error);
    res.status(500).json({ error: "Error al obtener turnos" });
  }
};

const cancelarTurno = async (req, res) => {
  try {
    const { idTurno } = req.params;
    const turnoEliminado = await Turno.deleteById(idTurno);

    if (!turnoEliminado) {
      return res.status(404).json({ error: "Turno no encontrado" });
    }

    res.json({ mensaje: "Turno cancelado correctamente" });
  } catch (error) {
    console.error("Error al cancelar turno:", error);
    res.status(500).json({ error: "Error al cancelar turno" });
  }
};

const createTurno = async (req, res) => {
  try {
    const { fecha, hora } = req.body;
    const { userId: idPaciente } = req.user;

    if (!fecha || !hora) {
      return res.status(400).json({ error: "Faltan datos: fecha u hora" });
    }

    const nuevoTurno = await Turno.createTurno(idPaciente, fecha, hora);
    res.status(201).json({ mensaje: "Turno creado", turno: nuevoTurno });
  } catch (error) {
    console.error("Error al crear el turno:", error);
    res.status(500).json({ error: "Error al crear el turno" });
  }
};

module.exports = { getTurnosPorPaciente, cancelarTurno, createTurno };
