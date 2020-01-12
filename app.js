const express = require('express'),
app = express(),
ejs =  require('ejs'),
layouts = require('express-ejs-layouts'),
notes = require('./notes.js'),
httpStatus = require('http-status-codes'),
yargs = require('yargs');
yargs.version('1.1.0'),
mongoose = require('mongoose');
//create database mongoose 
mongoose.connect('mongodb://localhost:27017/recipe_db',{useNewUrlParser: true});
const db = mongoose.connection;
db.once('open', () => {
    console.log('success');
})


const subscribeSchema = mongoose.Schema({ //a defined schema 

    name: String,
    email: String,
    zipCode: Number

});

const Subscriber = mongoose.model('Subscriber', subscribeSchema); //model use to instantiate new subscribers 


var subscriber1 = new Subscriber({ // object of type subscriber
name: 'Donta White',
email: 'donta@email.com'
});

subscriber1.save((error, saveDocument) => { //saving to database 

    if (error) console.log(error); // pass potential errors to the next middleware function 
    console.log(saveDocument)//log saved data document 
})



Subscriber.create( // another way to save user 
    {
        name: "Jonh Doe",
        email: "johndoe@email.com"

    },

    (error,saveDocument) => {

        if (error) console.log(error);
        console.log(saveDocument);
    }
)





app.set("port", process.env.PORT || 3000);

app.listen(3000,()=> {
console.log(`server started on port ${app.get("port")}`); 
})