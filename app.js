const express = require('express'),
app = express(),
ejs =  require('ejs'),
layouts = require('express-ejs-layouts'),
errorController = require("./controllers/errorController"),
homeController = require("./controllers/homeController"),
notes = require('./notes.js'),
yargs = require('yargs');
yargs.version('1.1.0'),
mongoose = require('mongoose'),
subscribersController = require('./controllers/subscribersController'),
db = mongoose.connection;
Subscriber = require('./models/subscriber_db');
//create database mongoose 
mongoose.connect('mongodb://localhost:27017/recipe_db',

    {
        useNewUrlParser: true
    }
);
db.once('open', () => {
    console.log(`database connected on port 27017`);
})
app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(layouts);
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(express.json());

app.get('', (req, res) => {

    res.send('Express Application Running')
})






app.get('/subscribers', subscribersController.getAllSubscribers, (req, res, next) => {

    console.log(req.data);

   // res.send(req.data);

    res.render('subscribers', {
        subscribers: req.data
    })
})

app.get("/contact", subscribersController.getSubscriptionPage);
app.post("/subscribe", subscribersController.saveSubscriber);











app.listen(3000,()=> {
console.log(`server started on port ${app.get("port")}`); 
})