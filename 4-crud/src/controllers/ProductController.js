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
    },

    //Cria função assincrona show
    async show(req, res) {

        //busca produto por id (param na url)
        const product = await Product.findById(req.params.id);

        //retorna listagem em json
        return res.json(product);
    },

    // Cria função assincrona store
    async store(req, res){

        // cria um Product com o body da requisição 
        const product = await Product.create(req.body);

        // Retorna o json do product
        return res.json(product);
    },

    async update(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})

        return res.json(product);
    },

    async destroy(req, res){
        await Product.findByIdAndRemove(req.params.id)
        return res.send();
    }

    
}
