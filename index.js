const express = require("express");
const conectarDB = require('./config/db');
const cors = require("cors");

//Creación del servidor
const app = express();

//Conectamos a la base de datos
conectarDB();

//middleware
app.use(cors());

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));


app.listen(4000, () => {
    console.log('Servidor corriendo exitosamente')
})

