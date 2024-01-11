const mongoose = require("mongoose");
// mongodb+srv://usuario:contraseña@cluster0.zqnzqqp.mongodb.net/nombredevuestroproyecto
const DB_URL =
  "";

const connect = async () => {
  try {
    // conectamos a nuestra BBDD
    const db = await mongoose.connect(DB_URL);
    const { name, host } = db.connection;
    console.log(`conectado a base de datos de ${name} db en el host ${host}`);
  } catch (error) {
    console.log("hemos tenido un error al conectar a la BBDD", error);
  }
};

module.exports = {connect};
