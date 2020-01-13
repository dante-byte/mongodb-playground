const mongoose = require("mongoose"),

subscriberSchema = mongoose.Schema({ //a defined schema 

    name: String,
    email: String,
    zipCode: Number

});

// const Subscriber = mongoose.model('Subscriber', subscribeSchema); //model use to instantiate new subscribers 

module.exports = mongoose.model('Subscriber', subscriberSchema); //model use to instantiate new subscribers 



//module.exports = mongoose.model("Subscriber", subscriberSchema);  //model use to instantiate new subscribers 1. reference 2. nameofSchema