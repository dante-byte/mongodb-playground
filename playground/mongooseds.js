const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/recipe_db', 
{

    useNewUrlParser: true
});

const db = mongoose.connection; 

db.once('open', () => {

    console.once('connect to mongodb');
})


var myQuery = Subscriber.findOne({

    name: 'Donta White'
}).where('email',/donta/);

myQuery.exec((error,data) => {
    if (data) console.log(data.name)
})