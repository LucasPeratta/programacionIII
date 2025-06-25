const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../../data/views/turnosLocal.json");

class TurnoLocal {
  constructor(id, idPaciente, fecha, hora) {
    this.id = id;
    this.idPaciente = idPaciente;
    this.fecha = fecha;
    this.hora = hora;
  }

  static readDB() {
    return new Promise((resolve, reject) => {
      fs.readFile(dbPath, "utf-8", (err, data) => {
        if (err) return reject(err);
        try {
          const parsed = JSON.parse(data);
          resolve(parsed);
        } catch (e) {
          reject(e);
        }
      });
    });
  }

  static writeDB(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile(dbPath, JSON.stringify(data, null, 2), (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  }

  static getAll() {
    return this.readDB();
  }

  static create(idPaciente, fecha, hora) {
    return new Promise((resolve, reject) => {
      this.readDB()
        .then((data) => {
          const nuevoId = `t${data.length + 1}`;
          const nuevoTurno = new TurnoLocal(nuevoId, idPaciente, fecha, hora);
          data.push(nuevoTurno);
          this.writeDB(data)
            .then(() => resolve(nuevoTurno))
            .catch(reject);
        })
        .catch(reject);
    });
  }

  static deleteById(idTurno) {
    return new Promise((resolve, reject) => {
      this.readDB()
        .then((data) => {
          const index = data.findIndex((t) => t.id === idTurno);
          if (index === -1) return resolve(false);
          data.splice(index, 1);
          this.writeDB(data)
            .then(() => resolve(true))
            .catch(reject);
        })
        .catch(reject);
    });
  }
}

module.exports = TurnoLocal;
