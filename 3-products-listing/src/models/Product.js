// Importa mongoos
const mongoose = require('mongoose');

//Cria Schema baseado no mongoose
const ProductSchema = new mongoose.Schema({

  //Define campos do modelo
  title: { type: String, required: true},
  description: { type: String, required: true},
  url: { type: String, required: true},
  createdAt: {type:Date, default: Date.now}
});

//Cria modelo Product com o ProductSchema

mongoose.model('Product', ProductSchema);
