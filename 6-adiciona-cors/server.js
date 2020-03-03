const express = require('express')
// Importa Cors
const cors = require('cors');
const mongoose= require('mongoose')
const requireDir = require('require-dir');

const app = express();

app.use(express.json());

// Usa Cors
app.use(cors());

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser:true, useUnifiedTopology: true } );
requireDir('./src/models/');

app.use('/api', require("./src/routes"));

app.listen(3001);