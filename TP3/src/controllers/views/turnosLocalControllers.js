const TurnoLocal = require("../../models/views/turnosLocal");

const renderListaTurnos = async (req, res) => {
  try {
    const turnos = await TurnoLocal.getAll();
    res.render("turnos", { turnos });
  } catch (error) {
    console.error("Error al cargar turnos:", error);
    res.send("Error al cargar turnos");
  }
};

const renderFormularioNuevoTurno = (req, res) => {
  res.render("crearTurno");
};

const crearTurno = async (req, res) => {
  const { fecha, hora, idPaciente } = req.body;

  if (!fecha || !hora || !idPaciente) {
    return res.send(`
      <script>
        alert('Faltan campos');
        window.history.back();
      </script>
    `);
  }

  try {
    await TurnoLocal.create(idPaciente, fecha, hora);
    res.send(`
      <script>
        alert('Turno creado correctamente');
        window.location.href = '/home';
      </script>
    `);
  } catch (error) {
    console.error("Error al crear turno:", error);
    res.send(`
      <script>
        alert('Error al crear el turno');
        window.history.back();
      </script>
    `);
  }
};

const eliminarTurno = async (req, res) => {
  const { idTurno } = req.params;

  try {
    await TurnoLocal.deleteById(idTurno);
    res.send(`
      <script>
        alert('Turno cancelado correctamente');
        window.location.href = '/turnoslocal';
      </script>
    `);
  } catch (error) {
    console.error("Error al eliminar turno:", error);
    res.send(`
      <script>
        alert('Error al cancelar el turno');
        window.history.back();
      </script>
    `);
  }
};

module.exports = {
  renderListaTurnos,
  renderFormularioNuevoTurno,
  crearTurno,
  eliminarTurno,
};
