const Producto = require("../models/Producto");


exports.crearProducto = async (req, res) =>{
    try {
        let producto;
    
        //Creación del producto

        producto = new Producto(req.body);
        await producto.save() //Pq es asíncrono y puede tardar un poco
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.otenerProductos = async (req, res) =>{

    try {
        const productos = await Producto.find();
        res.json(productos)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    } 
}

exports.actualizarProductos = async (req, res) =>{

    try {
        const {nombre, categoria, ubicacion, precio} = req.body;
        let producto = await Producto.findById(req.params.id);
            
            if(!producto){
            res.status(404).json({msg: 'No existe '})
        }

        producto.nombre = nombre;
        producto.categoria = categoria;        
        producto.ubicacion = ubicacion;
        producto.precio = precio;


        producto = await Producto.findOneAndUpdate({ _id: req.params.id}, producto, {new: true})
        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.getProductos = async (req, res) =>{

    try {
        let producto = await Producto.findById(req.params.id);
            
            if(!producto){
            res.status(404).json({msg: 'No existe '})
        }

        res.json(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.borrarProductos = async (req, res) =>{

    try {
        let producto = await Producto.findById(req.params.id);
            
            if(!producto){
            res.status(404).json({msg: 'No existe '})
        }
        
        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({msg: 'Producto eliminado exitosamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}