
const Category = require('../models/categories');


module.exports = {

    async getAllCategories(req, res) {

        try {
            const categories = await Product.find().populate('Category');
            res.status(200).json(categories);
        } catch (err) {
            res.status(500).json({mensaje: err.message});
        }
    },

    async createCategory(req, res) {
        const Category = new Category({
            name : req.body.name
        });

        try {
            const newCategory = await categories.save();
            res.status(201).json(categories);
        } catch (err) {
            res.status(400).json({mensaje: err.message});
        }
    },

};