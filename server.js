const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o App
const app = express();

// Permite o envio de Jsons para a api.
app.use(express.json())

// Iniciando o DB
mongoose.connect("mongodb://localhost:27017/node-api-own",
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

requireDir('./src/models')

// Rotas
app.use('/api', require('./src/routes'))

app.listen(3001)