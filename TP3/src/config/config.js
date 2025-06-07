const dotenv = require("dotenv");
dotenv.config();

class Config {
  constructor() {
    this.secreteWord = "lucas123"; // no pude leer la info del env nose xq
    this.expiresIn = "2h";
  }
}

module.exports = new Config();
