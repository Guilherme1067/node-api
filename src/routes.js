const express = require('express');
const routes = express.Router();

const ProducController = require("./controllers/ProductController");


routes.get('/products', ProducController.index)


module.exports = routes;