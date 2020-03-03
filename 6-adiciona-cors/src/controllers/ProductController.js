const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {

    async index(req, res){
        //Define um Query para parametros da url
        const {page = 1} = req.query;
        //Em vez do index usa paginate passando {filtros}, pagina atual e itens por pagina
        const products = await Product.paginate({}, { page, limit: 3 });
        return res.json(products);
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    async store(req, res){
        const product = await Product.create(req.body);
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
