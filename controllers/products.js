const getAllProducts = async (req, res) => {
    res.status(200).json({ msg: "Get All Producsts" });
}

const getAllProductsTesting = async (req, res) => {
    res.status(200).json({ msg: "Get All Producsts" });
}

module.exports = {getAllProducts, getAllProductsTesting}