const pacientesModel = require("../../models/mock/pacientes.models.js");
const Paciente = require("../../models/mock/entities/paciente.entity.js");

class PacientesController {
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const token = await pacientesModel.validate(email, password);

      res.status(200).json(token);
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  }

  async list(req, res) {
    res.status(200).json(await pacientesModel.list());
  }
  async create(req, res) {
    const { dni, nombre, apellido, email } = req.body;

    const nuevoPaciente = new Paciente(dni, nombre, apellido, email);

    const info = await pacientesModel.create(nuevoPaciente);
    res.status(200).json(info);
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const pacienteBorrado = await pacientesModel.delete(id);
      res.status(200).json(pacienteBorrado);
    } catch (error) {
      res.status(404).json({
        message: `no existe el paciente con el id: ${id}`,
        error: error.message,
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const { dni, nombre, apellido, email } = req.body;
      const nuevoPaciente = new Paciente(dni, nombre, apellido, email);
      const actualizado = await pacientesModel.update(id, nuevoPaciente);
      res.status(200).json(actualizado);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new PacientesController();
