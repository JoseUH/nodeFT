const http = require("http");

const PORT = 5000;

const requestHandler = (req, res) => {
    //req sera la peticionj que recibimos
    // res sera la respuesta que damos
}


//crear un servidor y guardarlo en una variable que nosotros hemos llamado app, y a esta variable le estamos pàsando nuestra función request...
const app = http.createServer(requestHandler)

app.listen(PORT, ()=> console.log("mi servidor esta funcionando"))

