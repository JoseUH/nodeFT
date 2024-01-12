const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const restauranteSchema = new Schema({
  nombre: { type: String, required: true },
  ciudad: { type: String, required: true },
  direccion: { type: String, required: false },
  carta:[{type: Schema.Types.ObjectId, ref: "comida"}]
//   el tipo ObjectId referencial al id de otra tabla en nuestro caso la tabla de comidas con la que esta relacionada
},{
    timestamps:true
});
const Restaurante = mongoose.model("restaurante", restauranteSchema);

module.exports = Restaurante;
