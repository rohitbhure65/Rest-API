// GOAL : create nodejs server using express
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get('/', (req, res) => {
    res.send("server is live")
})

// middleware to set router 
app.use("/api/products", products_routes) // http://localhost:5000/api/products

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server is running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()