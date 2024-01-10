const http = require("http");

const PORT = 5000;

const requestHandler = (req, res) => {
    //req sera la peticionj que recibimos
    // res sera la respuesta que damos
    res.setHeader("Content-Type","application/json");
    res.writeHeader(200);
    // res.end("esta funcionando")
    if (req.url == "/") {
        res.end("estoy en la home")
    }else if(req.url == "/movies"){
        res.end(" Estoy en la ruta de movies")
    }else{
        res.end(" esta ruta no existe")
    }
}


//crear un servidor y guardarlo en una variable que nosotros hemos llamado app, y a esta variable le estamos pàsando nuestra función request...
const app = http.createServer(requestHandler)

app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))

