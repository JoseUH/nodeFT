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
const putComida = async(req,res)=>{
  try {
    // recogido nuestro paramatro de nuestra url para luego atacarlo y modificarlo
    const {id} = req.params;
    //  le hemos mandado al modelo a validar lo que le he estamos pasando
    const putComida = new Comida(req.body);
    // como el campo id en mongo en _id se lo actualizamos por id para mandaserlo luego a actualizar
    putComida._id=id
    // le mandamos el id para que sepa cual es la que tiene que modificar, el cuerpo ya validado con el modelo
    const updatedComida = await Comida.findByIdAndUpdate(id,putComida,{new:true} );
    // si alguien escribe un caracter mal de la misma longitud que nuestro id nos dara un fallo
    if (!updatedComida) {
      return res.status(404).json({message:" no tenemos esta comida con ese ID"})
    }
    return res.status(200).json(updatedComida)

  } catch (error) {
    return res.status(500).json(error)
  }
}
const deleteComida= async(req,res)=>{
try {
  const {id} = req.params;
  const deleteComida = await Comida.findByIdAndDelete(id);
  if (!deleteComida) {
    return res.status(404).json({message:"No tenemos ninguna comida con ese ID"})
  }
  return res.status(200).json(deleteComida)

} catch (error) {
  return res.status(500).json(error)
}
}
module.exports = { getComidas, postComida,putComida,deleteComida };
