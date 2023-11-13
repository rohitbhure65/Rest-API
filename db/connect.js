const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb://localhost:27017/renteaserooms?readPreference=primary&ssl=false&directConnection=true'

const ConnectDB = () => {
    return mongoose.connect(MONGODB_URL)
}

module.exports = ConnectDB;