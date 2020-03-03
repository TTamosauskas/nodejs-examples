//Importa express 
const express = require('express')

//ativa express
const app = express();

//exemplo de rota
// req = dados da requisição do cliente
// res = resposta do servidor
app.get('/hello', (req, res) => {
res.send("Hello World")
})

//abre porta 3001
app.listen(3001);