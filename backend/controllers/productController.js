
const Product = require('../models/products');


module.exports = {

    async getAllProducts(req, res) {

        try {
            const products = await Product.find().populate('Category');
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({mensaje: err.message});
        }
    },


    async getAllProductById(req, res) {

        try {
            const product = await Product.findById(req.params.id).populate('Category');
            res.status(200).json(product);
        } catch (err) {
            res.status(500).json({mensaje: err.message});
        }
    },

    async createProduct(req, res) {
        const Product = new Product({
            name : req.body.name,
            description : req.body.description,
            price : req.body.price,
            category : req.body.category
        });

        try {
            const newProduct = await product.save();
            res.status(201).json(newProduct);
        } catch (err) {
            res.status(400).json({mensaje: err.message});
        }
    },

};