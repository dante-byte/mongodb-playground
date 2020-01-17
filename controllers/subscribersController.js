//require subscriver module
const Subscriber = require('../models/subscriber_db');

exports.getAllSubscribers = (req, res, next) => { // pass data from the database to the next middleware function
    //query with find on the subscriber model
    Subscriber.find({}, (error, subscribers) => {
        //pass error to the next middleware function 
        if (error) next(error);
        //set data that comes back from mongoDb on request
        req.data = subscribers;
        next();

    });
};

exports.getSubscriptionPage = (req, res) => {

        res.render('contact'); // action to render page
    };

// exports.saveSubscriber = (req, res) => {
//     let newSubscriber = new Subscriber({
//         //action to save subscriber 
//         name: req.body.nane,
//         email: req.body.email,
//         zipCode: req.body.zipCode
//     });
//     newSubscriber.save((error, result) => {
//         if (error) res.send(error);
//         res.render('thanks');
//     });
// };


exports.saveSubscriber = (req, res) => {
    let newSubscriber = new Subscriber({
      name: req.body.name,
      email: req.body.email,
      zipCode: req.body.zipCode
    });
    newSubscriber
      .save()
      .then(result => {
        res.render("thanks");
      })
      .catch(error => {
        if (error) res.send(error);
      });
  };
  




