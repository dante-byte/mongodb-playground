// mongoose = require('mongoose');
// //create database mongoose 
// mongoose.connect('mongodb://localhost:27017/recipe_db',{useNewUrlParser: true});
// const db = mongoose.connection;

// const subscriber_db = require('./models/subscriber_db.js');

// db.once('open', () => {
//     console.log('success');
// })

// var subscriber1 = new Subscriber({ // object of type subscriber
// name: 'Donta White',
// email: 'donta@email.com'
// });

// subscriber1.save((error, saveDocument) => { //saving to database 

//     if (error) console.log(error); // pass potential errors to the next middleware function 
//     console.log(saveDocument)//log saved data document
// })


//option 2 
// Subscriber.create( // another way to save user 
//     {
//         name: "Jonh Doe",
//         email: "johndoe@email.com"

//     },

//     (error,saveDocument) => {

//         if (error) console.log(error);
//         console.log(saveDocument);
//     });