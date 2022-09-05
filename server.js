//Declare variables 
const express = require("express") //returns a function reference, that function is called with express()
const app = express() //app is an object returned by express();
const PORT = 8500; //setting up the listening port
const mongoose = require('mongoose')
require('dotenv').config()//Things we want to keep private such as connection string to mongodb.
const DevKittyQ = require('./models/devkittyq')



//Set middleware
app.set("view engine", "ejs") //establishing our view engine and ask it to use ejs
app.use(express.static('public')) //Hey Express, if you need files that are client facing, look in public.
app.use(express.urlencoded({extended: true})) //helps validate the right type of data back and forth. Extended: true allows us to send more complex objects like arrays etc.

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {console.log('Connected to db!')}) //need to pass in connection string + some connection options

//GET METHOD
app.get('/', async (request, response) => {
    try{
        response.render('index.ejs')
    } catch(error){
        response.status(500).send({message: error.message})
    }
})

//POST METHOD
app.post('/', async (request, response) => {
    const devKittyQ = new DevKittyQ(
        {
            //could refactor and do deconstructuring...
            title: request.body.title,
            content: request.body.content

        }
    )
    try {
        await devKittyQ.save()
        console.log(devKittyQ)
        response.redirect('/')
        
    } catch(error){
        response.status(500).send({message: error.message})
        response.redirect('/')
    }
})


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) //helps to initialize the server