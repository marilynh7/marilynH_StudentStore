//import both dependencies 
const express = require("express")                  //pull express from node_modules
const morgan = require("morgan")
const storeRouter = require("./routes/store")       //allows us to access store router 

const app = express()                               //instantiated express 

app.use(morgan("tiny"))                             //will log requests to server in the terminal 
app.use("/store", storeRouter)                      //attatch the storeRouter to the endpoint /store

const port = 3000                                   //the port to listen to 

app.listen(port, () => {
    console.log('Server listening on port '+port)
})