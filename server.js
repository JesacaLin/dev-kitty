//Declare variables 
const express = require("express") //returns a function reference, that function is called with express()
const app = express() //app is an object returned by express();
const PORT = 8500; //setting up the listening port
const mongoose = require('mongoose')
require('dotenv').config()//Things we want to keep private such as connection string to mongodb.
//add model variable


//Set middleware
app.set("view engine", "ejs") //establishing our view engine and ask it to use ejs
app.use(express.static('public')) //Hey Express, if you need files that are client facing, look in public.
app.use(express.urlencoded({extended: true})) //help validate the right type of data back and forth. Extended: true allows us to send more complex objects like arrays etc.