const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../../data/views/turnosLocal.json");

const readDB = () => JSON.parse(fs.readFileSync(dbPath));
const writeDB = (data) =>
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));

class TurnoLocal {
  constructor(id, idPaciente, fecha, hora) {
    this.id = id;
    this.idPaciente = idPaciente;
    this.fecha = fecha;
    this.hora = hora;
  }

  static getAll() {
    return readDB();
  }

  static create(idPaciente, fecha, hora) {
    const data = readDB();
    const nuevoId = `t${data.length + 1}`;
    const nuevoTurno = new TurnoLocal(nuevoId, idPaciente, fecha, hora);
    data.push(nuevoTurno);
    writeDB(data);
    return nuevoTurno;
  }

  static deleteById(idTurno) {
    const data = readDB();
    const index = data.findIndex((t) => t.id === idTurno);
    if (index === -1) return false;
    data.splice(index, 1);
    writeDB(data);
    return true;
  }
}

module.exports = TurnoLocal;
