//Importa dependencias

const mongoose = require('mongoose');

// Chama model Product
const Product = mongoose.model('Product');

//Exporta funções
module.exports = {

    //Cria função assincrona index
    async index(req, res){
        // busca products no banco
        const products = await Product.find();

        //retorna listagem em json
        return res.json(products);
    }
}
