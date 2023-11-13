const product = require('../models/product')

const getAllProducts = async (req, res) => {

    const { company, name, featured } = req.query;
    const queryobject = {}

    if (company) {
        queryobject.company = company;
    }

    if (featured) {
        queryobject.featured = featured;
    }
    if (name) {
        queryobject.name = { $regex: name, $options: "i" }
    }
    console.log(queryobject)

    const mydata = await product.find(queryobject)
    res.status(200).json({ mydata });
}

const getAllProductsTesting = async (req, res) => {
    const mydata = await product.find(req.query)
    res.status(200).json({ mydata });
}

module.exports = { getAllProducts, getAllProductsTesting }