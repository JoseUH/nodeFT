const Comida = require("../models/comida.model");

const getComidas = async (req, res) => {
  try {
    // me voy a crear una variable que contenga toda la informacion que recibo
    const allComidas = await Comida.find();
    return res.status(200).json(allComidas);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postComida = async (req, res) => {
  try {
    // recojo de postman importante poner raw y type json en postman, y las dos lineas del script para poder interpretarlo sino nos saldra indefinido, y con el req.body recogemos esta informacion
    // console.log(req.body)
    // me creo una variable que pase a traves de nuestro modelo la validacion y le paso nuestro req.body
    const newComida = new Comida(req.body);
    // console.log(newComida);
    // el metodo save nos rive para guardar un elemento en BBDD
    const createdComida = await newComida.save();
    return res.status(201).json(createdComida);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = { getComidas, postComida };
