const mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGO_KEY

const ConnectDB = () => {
    return mongoose.connect(MONGODB_URL)
}

module.exports = ConnectDB;