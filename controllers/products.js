const product = require('../models/product')

const getAllProducts = async (req, res) => {

    const { company, name, featured, sort, select } = req.query;
    const queryobject = {}

    if (company) {
        queryobject.company = company;
    }

    if (featured) {
        queryobject.featured = featured;
    }
    if (name) {
        queryobject.name = { $regex: name, $options: "i" };
    };


    let apiData = product.find(queryobject)
    if (sort) {
        let sortFix = sort.split(',').join(" ");
        apiData = apiData.sort(sortFix)
        // console.log(apiData)
    }

    if (select) {
        let selectFix = select.split(',').join(" ");
        apiData = apiData.select(selectFix)
        // console.log(apiData)
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 3;
    let skip = (page - 1) * limit;

    apiData = apiData.skip(skip).limit(limit)
    console.log(queryobject)

    const mydata = await apiData;
    res.status(200).json({ mydata, nbHits: mydata.length });
}



module.exports = { getAllProducts }