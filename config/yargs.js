const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe:'Es la base de la tabla de la multiplicación',
  })
  .option("h",{
    alias:'hasta',
    type:'numbre',
    default:10,
    describe:'Este es el límite de la multiplicación',
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe:'Imprime la tabla de multiplicar en la consola',
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw `La base tiene que ser un número`;
    }
    return true;
  }).argv;

  module.exports = argv;
