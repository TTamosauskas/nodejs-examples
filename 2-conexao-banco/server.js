//Importa dependencias
const express = require('express')
const mongoose= require('mongoose')

//Cria variavel com o express
const app = express();

// Conecta com banco de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true, useUnifiedTopology: true } );

require('./src/models/Product')

const Product = mongoose.model('Product')

// Levanta o servidor
// req = dados da requisição do cliente
// res = resposta do servidor
app.get('/', (req, res) => {
Product.create({
    title: 'Nome do Produto',
    description: 'Descrição do produto',
    url: 'http://endereco-do-produto.com'
})
return res.send("Produto Inserido no Banco de Dados")
})

//abre porta 3001
app.listen(3001);