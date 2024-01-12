const mongoose = require("mongoose");
// crear una variable que acorte lo que estamos poniendo
const Schema = mongoose.Schema;

const comidaSchema = new Schema({
  nombre: { type: String, required: true },
  pais: { type: String, required: true },
  foto: { type: String, required: false },
},{
    timestamps:true
    // te genera la fecha de creacion del objeto y fecha de modificacion
});
// relacionar mi schema con mi modelo de la base de datos
const Comida = mongoose.model("comida", comidaSchema);

module.exports = Comida;
