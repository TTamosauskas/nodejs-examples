// Importa express, routes e 
const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

//Get é o método usado para consultar
routes.get('/products', ProductController.index);

routes.get('/products/:id', ProductController.show);

//Post é o método usado para criar
routes.post('/products', ProductController.store);

//Put é o metodo usado para atualizações
routes.put('/products/:id', ProductController.update);

//Put é o metodo usado para apagar
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;
