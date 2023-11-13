const ConnectDB = require('./db/connect')
const product = require('./models/product')

const productJSON = require('./product.json')

const start = async () => {
    try {
        await ConnectDB();
        await product.deleteMany()
        await product.create(productJSON)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

start()