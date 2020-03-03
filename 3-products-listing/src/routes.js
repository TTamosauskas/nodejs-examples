// Importa express, routes e 
const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//Usa método get em routes e aciona função do controller
routes.get('/products', ProductController.index);

module.exports = routes;
