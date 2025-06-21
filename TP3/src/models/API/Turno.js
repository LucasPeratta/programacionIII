const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../../data/API/turnosOnline.json");

const readDB = () => JSON.parse(fs.readFileSync(dbPath));
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

class Turno {
  constructor(id, idPaciente, fecha, hora) {
    this.id = id;
    this.idPaciente = idPaciente;
    this.fecha = fecha;
    this.hora = hora;
  }

  static getByPacienteId(idPaciente) {
    const data = readDB();
    return data.filter((t) => t.idPaciente === idPaciente);
  }

  static deleteById(idTurno) {
    const data = readDB();
    const index = data.findIndex((t) => t.id === idTurno);
    if (index === -1) return null;
    const deleted = data.splice(index, 1);
    writeDB(data);
    return deleted[0];
  }

  static createTurno(idPaciente, fecha, hora) {
    const data = readDB();
    const nuevoId = `t${data.length + 1}`;
    const nuevoTurno = new Turno(nuevoId, String(idPaciente), fecha, hora);
    data.push(nuevoTurno);
    writeDB(data);
    return nuevoTurno;
  }
}

module.exports = Turno;
