const express = require("express")

const PORT = 5000;

const app = express();

app.use("/movies",(req,res)=>{
    const movies = [
        {
            title:"pesadillas antes de navidad",
        },
        {
            title:"alien",
        }
    ]
    res.send(movies)
})
app.use("/",(req,res) =>{
    res.send("Estoy en la home")
})

app.listen(PORT, ()=> console.log(`escuchando en el puerto http://localhost:${PORT}`))


