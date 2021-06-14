//create a new router 1. grab the express package 2. create router from express package
const express = require("express")
const router = express.Router()         //instantiate the router that will act as a mini app within our app

//an array of all the products in the store 
const products = {
    products : {name:0, category: 0, image: 0, description: 0, price: 0}
}

router.get("/", async(req, res, next) => {
    res.status(200).json(products)
})

module.exports = router                 //allows other parts of our application to access routes listed here
