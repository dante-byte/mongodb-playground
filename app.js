const express = require('express'),
app = express(),
ejs =  require('ejs'),
layouts = require('express-ejs-layouts'),
notes = require('./notes.js'),
httpStatus = require('http-status-codes');


const MongoDB = require('mongodb').MongoClient, 
dbURL = 'mongodb://localhost:27017',
dbName = 'recipe_db';

MongoDB.connect(dbURL, (error,client) => {

    if (error) throw error;
    let db = client.db(dbName);
    db.collection('contacts')
    .find()
    .toArray((error, data) => {

        //console.log(data);
    })

})


app.set("port", process.env.PORT || 3000);

app.get("", (req, res) => {

    res.send('hello world');

})

app.get('/profile/:id', (req, res) => {

    res.send('testing ' + req.params.id)
})


app.listen(3000, () => {

console.log(`server started on port ${app.get("port")}`);

})