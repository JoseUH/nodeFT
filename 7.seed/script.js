const express = require("express");
// nos tenemos que traer nuestra función connect que hemos exportando anteriormente
const {connect} = require("./src/utils/db")
// nos vamos a traer nuestro router que esta ahora mismo exportado en nuestra carpeta de routes
const comidaRoutes = require("./src/api/routes/comida.routes")
const PORT = 5000;

const app = express();
// aqui iniciamos nuestra funcion connect que es la que nos permitira estar ligados o conectados a nuestra base de datos
connect();
// nos va a permitir recibir json e interpretarlos desde postman o desde un front
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// aqui usamos nuestro roueter para decirle que esta es mi primer endpoint
app.use("/comidas",comidaRoutes)

app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
