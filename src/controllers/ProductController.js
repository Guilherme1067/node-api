const mongoose = require('mongoose');

const Products = mongoose.model('Products')

module.exports = {
    async index(req,res){
        const products = await Products.find( );
        res.json(products);
    },



    //req contem todas dados da requisição.
        async store(req,res){
            const product = Products.create(req.body)
            return res.json(product)
        }

    
};

