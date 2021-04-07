
const express = require('express');

//marko
require("marko/node-require");
var markoExpress = require('marko/express');
//dao
const CafeDao = require('./dao/cafeDao'); 
const dao = new CafeDao(); 
//menagens flash
const session = require('express-session'); 
const flash = require('connect-flash'); 

//body parser
const bodyParser = require("body-parser")

//app
const app = express(); 
app.use(markoExpress()); 
app.use(bodyParser.urlencoded())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({ 
    secret:'geeksforgeeks', 
    saveUninitialized: true, 
    resave: true
})); 
  
//rotas para os icones, imagens e css
app.use("/icons", express.static(__dirname + "/icons/"));
app.use("/css", express.static(__dirname + "/templates/css/")); 
app.use("/iconsvalor", express.static(__dirname + "/templates/iconsvalor"));
app.use("/iconesvalor", express.static(__dirname + "/templates/iconesvalor"));

//flash
app.use(flash()); 

//rotas
app.use("/", require("./routes/router.js"));

//server
app.listen(3333, () => console.log('server is running!')) ;