//Declare variables 
const express = require("express") //returns a function reference, that function is called with express()
const app = express() //app is an object returned by express();
const PORT = 3000; //setting up the listening port
const mongoose = require('mongoose')
const DevKittyQ = require('./models/DevKittyQ') //DevKittyQ is where the mongoose models live
require('dotenv').config()//Things we want to keep private such as connection string to mongodb.


//Set middleware
app.set("view engine", "ejs") //establishing our view engine and ask it to use ejs
app.use(express.static('public')) //Hey Express, if you need files that are client facing, look in public.
app.use(express.urlencoded({extended: true})) //helps validate the right type of data back and forth. Extended: true allows us to send more complex objects like arrays etc.

mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true}, () => {console.log('Connected to db!')}) //need to pass in connection string + some connection options

//GET METHOD
app.get("/", async (req, res) => {
    try {
        DevKittyQ.find({}, (err, myQuestions) => {
            res.render("index.ejs", { devkittyQ: myQuestions });
        });
    } catch (err) {
        if (err) return res.status(500).send(err);
    }
});

//POST METHOD
app.post('/', async (req, res) => {
    const devkittyQ = new DevKittyQ(
        {
            category: req.body.category,
            content: req.body.content
        });
    try {
        await devkittyQ.save();
        console.log(devkittyQ)
        //redirects to the add question section rather than top of the page.
        res.redirect("#redirect");

    } catch (err) {
        if (err) return res.status(500).send(err);
        res.redirect("/");
    }
});


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)) //helps to initialize the server