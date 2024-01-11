const express = require("express");
// nos tenemos que traer nuestra función connect que hemos exportando anteriormente
const {connect} = require("./src/utils/db")
const PORT = 5000;

const app = express();
// aqui iniciamos nuestra funcion connect que es la que nos permitira estar ligados o conectados a nuestra base de datos
connect();
app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
