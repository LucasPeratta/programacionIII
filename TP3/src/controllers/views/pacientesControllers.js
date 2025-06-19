const pacientesModel = require("../../models/mock/pacientes.models.js");

const renderListaPacientes = async (req, res) => {
  try {
    const pacientes = await pacientesModel.list();
    res.render("pacientes", { pacientes });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener la lista de pacientes");
  }
};

const eliminarPaciente = async (req, res) => {
  try {
    const dni = req.params.id;
    await pacientesModel.delete(dni);
    res.send(`
      <script>
        alert('Paciente eliminado correctamente');
        window.location.href = '/pacientelocal';
      </script>
    `);
  } catch (error) {
    console.log("error: ", error);

    res.status(404).send("No se encontro el paciente para eliminar");
  }
};

module.exports = {
  renderListaPacientes,
  eliminarPaciente,
};
