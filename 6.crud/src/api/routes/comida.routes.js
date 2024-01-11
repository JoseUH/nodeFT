const express = require("express")
// me voy a traer mis funciones o mejor dicho controladores de mi carpeta controllers aqui para tener en este archivo solo lo que son las rutas
const {getComidas,postComida} = require("../controllers/comida.controllers")

const comidaRoutes = express.Router();

// CRUD
// CREATE = meter informacion a la base de datos que es un POST
// READ = leer la información de la BBDD que es un GET
// UPDATE = actualizar la información de la BBDD que puede ser un PATCH o un PUT
// DELETE = borrar la información de la BBDD que es un DELETE

comidaRoutes.get("/",getComidas)
comidaRoutes.post("/",postComida)

module.exports=comidaRoutes;