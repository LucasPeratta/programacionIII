const fs = require("fs");
const path = require("path");
const dbPath = path.join(__dirname, "../../data/views/turnosLocal.json");

// Mostrar todos los turnos
const renderListaTurnos = (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath));
  res.render("turnos", { turnos: data });
};

// Mostrar formulario para nuevo turno
const renderFormularioNuevoTurno = (req, res) => {
  res.render("crearTurno");
};

// Crear turno desde formulario
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

  const data = JSON.parse(fs.readFileSync(dbPath));
  const nuevoId = `t${data.length + 1}`;
  const nuevoTurno = { id: nuevoId, idPaciente, fecha, hora };
  data.push(nuevoTurno);
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

  res.send(`
    <script>
      alert('Turno creado correctamente');
      window.location.href = '/home';
    </script>
  `);
};

// Eliminar turno
const eliminarTurno = (req, res) => {
  const { idTurno } = req.params;
  let data = JSON.parse(fs.readFileSync(dbPath));

  const index = data.findIndex((t) => t.id === idTurno);
  if (index !== -1) {
    data.splice(index, 1);
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  }

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
