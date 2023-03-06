const express = require('express');
const router = express.router();
const categoryController = require('../controllers/categoryController');



router.get('/',categoryController.getAllCategories);
router.post('/',categoryController.createCategory);


module.exports =  router;

