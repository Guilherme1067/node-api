const { json } = require('express');
const mongoose = require('mongoose');

const Products = mongoose.model('Products')

module.exports = {
    async index(req,res){
        //pega do metodo get o parametro que indica a pag da requisição
        const { page } = req.query;
        const products = await Products.paginate({}, {page, limit:5});
        res.json(products);
    },

     async getById(req,res){
         const product = await Products.findById(req.params.id);
         return res.json(product);
     },

     async update(req,res){
         const product = await Products.findByIdAndUpdate(req.params.id, req.body)
        return res.json(product);
     },

     async delete(req,res){
        const product = await Products.findByIdAndDelete(req.params.id)
        
        return res.send();
     },
   
    //req contem todas dados da requisição.
        async store(req,res){
            const product = Products.create(req.body)
            return res.json(product)
        }
};

