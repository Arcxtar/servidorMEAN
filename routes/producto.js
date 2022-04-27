//Rutas para el producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

//api productos
router.post('/', productoController.crearProducto);
router.get('/', productoController.otenerProductos);
router.put('/:id', productoController.actualizarProductos);
router.get('/:id', productoController.getProductos);
router.delete('/:id', productoController.borrarProductos);


module.exports = router;