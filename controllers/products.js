const product = require('../models/product')

const getAllProducts = async (req, res) => {
    const mydata = await product.find({})
    res.status(200).json({ mydata });
}

const getAllProductsTesting = async (req, res) => {
    const mydata = await product.find({})
    res.status(200).json({ mydata });
}

module.exports = {getAllProducts, getAllProductsTesting}