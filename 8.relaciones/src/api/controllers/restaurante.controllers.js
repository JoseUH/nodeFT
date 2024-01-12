const Restaurante = require("../models/restaurante.model");

const getRestaurantes = async (req, res) => {
  try {
    // para sacar la información de nuestra relación en nuestro get le tenemos que decir que campo vamos a popular con .populate() y si quisieramos que no muestre toda la información de ese objeto solamente la que nosotros queramos, tendriamos que poner primer campo donde se popula en nuestro caso: carta y los siguientes campos los que quiero que muestre
    
    // const allRestaurantes = await Restaurante.find().populate("carta");
    const allRestaurantes = await Restaurante.find().populate("carta", "nombre pais");

    return res.status(200).json(allRestaurantes);
  } catch (error) {
    return res.status(500).json(error);
  }
};
const postRestaurante = async (req, res) => {
  try {
    const newRestaurante = new Restaurante(req.body);
    const createdRestaurante = await newRestaurante.save();
    return res.status(201).json(createdRestaurante);
  } catch (error) {
    return res.status(500).json(error);
  }
};


module.exports = { getRestaurantes, postRestaurante};
