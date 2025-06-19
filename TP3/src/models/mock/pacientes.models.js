const Persona = require("./../mock/entities/paciente.entity.js");
const Config = require("./../../config/config.js");
const jwt = require("jsonwebtoken");

class PacientesModel {
  constructor() {
    this.data = [
      //creo mas personas para probar, siempre al montarlo volveran a ser estas 4.
      new Persona(
        "123456787",
        "Sergio",
        "Antozzi",
        "email@gmail.com",
        "12345",
        1
      ),
      new Persona(
        "234567891",
        "María",
        "González",
        "maria@gmail.com",
        "12345",
        2
      ),
      new Persona(
        "345678912",
        "Lucas",
        "Fernández",
        "lucas@gmail.com",
        "12345",
        3
      ),
      new Persona(
        "456789123",
        "Carla",
        "Martínez",
        "carla@gmail.com",
        "12345",
        4
      ),
    ];

    this.id = 5;
  }

  findByEmail(email, password) {
    return new Promise((resolve, reject) => {
      try {
        const paciente = this.data.find(
          (p) => p.email === email && p.password === password
        );
        if (paciente === null) {
          throw new Error("el paciente no existe");
        }
        resolve(paciente);
      } catch (error) {
        reject(error);
      }
    });
  }

  validate(email, password) {
    return new Promise(async (resolve, reject) => {
      try {
        const userFound = await this.findByEmail(email, password);

        if (!userFound || userFound.password == null) {
          throw new Error("wrong email or password");
        }

        //payload, secreto, tiempo de expiracion
        const payload = {
          userId: userFound.id,
          userEmail: userFound.email,
        };
        console.log("palabra secreta, pacientes model:", Config.secreteWord);

        const token = jwt.sign(payload, Config.secreteWord, {
          expiresIn: Config.expiresIn,
        });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  }

  // crea un dato nuevo (alta de cliente)
  create(paciente) {
    //TODO: verificar que no sea nulo si es nulo tierar excepcion

    //return persona;
    return new Promise((resolve, reject) => {
      try {
        paciente.id = this.id;
        this.id++;
        const pacienteEncontrado = this.data.find(
          (p) => p.email === paciente.email
        );
        if (pacienteEncontrado === null) {
          this.data.push(paciente);
        } else {
          throw new Error("el paciente ya existe");
        }

        resolve(paciente);
      } catch (error) {
        reject(error);
      }
    });
  }
  // actualiza los datos del cliente con id = id
  update(id, paciente) {
    return new Promise((resolve, reject) => {
      try {
        const pacienteEncontrado = this.data.find((p) => p.id == id);
        if (pacienteEncontrado === null) {
          throw new Error("No se encuntra el paciente");
        }
        pacienteEncontrado.dni = paciente.dni;
        pacienteEncontrado.email = paciente.email;
        pacienteEncontrado.nombre = paciente.nombre;
        pacienteEncontrado.apellido = paciente.apellido;
        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    });
  }
  // elimina el cliente con id = id
  delete(dni) {
    return new Promise((resolve, reject) => {
      try {
        const pacienteEncontrado = this.data.find((p) => p.dni == dni);
        if (!pacienteEncontrado) {
          throw new Error("El paciente no existe");
        }
        const pos = this.data.indexOf(pacienteEncontrado);
        this.data.splice(pos, 1);
        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    });
  }

  // devuelve la lista completa en un arreglo de strings
  list() {
    return new Promise((resolve, reject) => {
      resolve(this.data);
    });
  }
  getPacienteById(id) {
    return new Promise((resolve, reject) => {
      try {
        const identificador = Number(id);
        const pacienteEncontrado = this.data.find(
          (paciente) => paciente.id === identificador
        );
        if (!pacienteEncontrado) {
          throw new Error("el id es incorrecto");
        }
        resolve(pacienteEncontrado);
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = new PacientesModel();
