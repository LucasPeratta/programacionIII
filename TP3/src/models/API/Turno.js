const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "../../data/API/turnosOnline.json");

class Turno {
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

  static getByPacienteId(idPaciente) {
    return new Promise((resolve, reject) => {
      this.readDB()
        .then((data) => {
          const result = data.filter((t) => t.idPaciente === idPaciente);
          resolve(result);
        })
        .catch(reject);
    });
  }

  static deleteById(idTurno) {
    return new Promise((resolve, reject) => {
      this.readDB()
        .then((data) => {
          const index = data.findIndex((t) => t.id === idTurno);
          if (index === -1) return resolve(null);
          const deleted = data.splice(index, 1);
          return this.writeDB(data).then(() => resolve(deleted[0]));
        })
        .catch(reject);
    });
  }

  static createTurno(idPaciente, fecha, hora) {
    return new Promise((resolve, reject) => {
      this.readDB()
        .then((data) => {
          const nuevoId = `t${data.length + 1}`;
          const nuevoTurno = new Turno(
            nuevoId,
            String(idPaciente),
            fecha,
            hora
          );
          data.push(nuevoTurno);
          this.writeDB(data)
            .then(() => resolve(nuevoTurno))
            .catch(reject);
        })
        .catch(reject);
    });
  }
}

module.exports = Turno;
