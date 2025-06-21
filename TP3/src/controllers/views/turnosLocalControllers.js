const TurnoLocal = require("../../models/views/turnosLocal");

const renderListaTurnos = (req, res) => {
  const turnos = TurnoLocal.getAll();
  res.render("turnos", { turnos });
};

const renderFormularioNuevoTurno = (req, res) => {
  res.render("crearTurno");
};

const crearTurno = (req, res) => {
  const { fecha, hora, idPaciente } = req.body;

  if (!fecha || !hora || !idPaciente) {
    return res.send(`
      <script>
        alert('Faltan campos');
        window.history.back();
      </script>
    `);
  }

  TurnoLocal.create(idPaciente, fecha, hora);

  res.send(`
    <script>
      alert('Turno creado correctamente');
      window.location.href = '/home';
    </script>
  `);
};

const eliminarTurno = (req, res) => {
  const { idTurno } = req.params;

  TurnoLocal.deleteById(idTurno);

  res.send(`
    <script>
      alert('Turno cancelado correctamente');
      window.location.href = '/turnoslocal';
    </script>
  `);
};

module.exports = {
  renderListaTurnos,
  renderFormularioNuevoTurno,
  crearTurno,
  eliminarTurno,
};
