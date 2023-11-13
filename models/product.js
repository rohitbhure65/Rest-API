const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.9
    },
    company: {
        type: String,
        enum: ["apple", "mi", "hp", "dell"]
    }

})

module.exports = mongoose.model("Product", productSchema)