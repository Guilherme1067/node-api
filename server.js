const express = require('express');
const mongoose = require('mongoose');

const app = express()

mongoose.connect("mongodb://localhost:27017/node-api-own", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

require('./src/models/Product');

const Product = mongoose.model('Products');

app.get('/', (req,res) => {
        Product.create({
            title:"NodeJS",
            description: "finally try about basic node connectios with db",
            url: "www.finally.com",
        })
    return res.send('Hello Guilherme, we wish you the best of luck in your new jorney');
})



app.listen(3001)