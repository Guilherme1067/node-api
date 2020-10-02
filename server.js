const express = require('express');
const mongoose = require('mongoose');


// Iniciando o APP
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost/node-api', { useNewUrlParser: true})

// Primeira rotaa
app.get('/', (req,res) => {
    res.send("Hello i am a")
})

app.listen(3001); 	