const express = require("express");

const {
  getRestaurantes,
  postRestaurante
} = require("../controllers/restaurante.controllers");

const restauranteRoutes = express.Router();

restauranteRoutes.get("/", getRestaurantes);
restauranteRoutes.post("/", postRestaurante);
// restauranteRoutes.put("/:id", putrestaurante);
// restauranteRoutes.delete("/:id", deleterestaurante);
module.exports = restauranteRoutes;
