const express = require("express");
// import express from "express" esta alternativa para importar este paquete, tendriamos que poner en nuestra hoja de ruta el "type": "module" para que nos funcionase

const PORT = 5000;
const app = express();

const routerMovies = express.Router();

routerMovies.get("/", (req, res) => {
  const movies = [
    {
      title: "pesadillas antes de navidad",
    },
    {
      title: "alien",
    },
  ];
  res.send(movies);
});
routerMovies.get("/title/:title", (req, res) => {
  const movies = [
    {
      title: "pesadillas antes de navidad",
    },
    {
      title: "alien",
    },
  ];
  console.log(req.params)

  res.send(movies);
});
routerMovies.get("/array", (req, res) => {
  const movies = [
    {
      title: "pesadillas antes de navidad",
    },
    {
      title: "alien",
    },
  ];
  console.log(req.params);

  res.send("este es la devolucion de mi endpoint array");
});

app.use("/movies", routerMovies);

app.listen(PORT, () =>
  console.log(`escuchando en el puerto http://localhost:${PORT}`)
);
