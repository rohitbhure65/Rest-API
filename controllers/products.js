const product = require('../models/product')

const getAllProducts = async (req, res) => {

    const { company, price } = req.query;
    const queryobject = {}

    if(company || price){
        queryobject.company = company;
        queryobject.price = price
        console.log(queryobject.company)
        console.log(queryobject.price)
    }


    const mydata = await product.find(queryobject)
    res.status(200).json({ mydata });
}

const getAllProductsTesting = async (req, res) => {
    const mydata = await product.find(req.query)
    res.status(200).json({ mydata });
}

module.exports = { getAllProducts, getAllProductsTesting }