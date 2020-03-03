//Importa dependencias
const express = require('express')
const mongoose= require('mongoose')
const requireDir = require('require-dir');

//Cria variavel com o express
const app = express();

// Conecta com banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true, useUnifiedTopology: true } );

//Importa modelo criado 
requireDir('./src/models/');

// Rotas
app.use('/api', require("./src/routes"));

//Abre porta 3001
app.listen(3001);