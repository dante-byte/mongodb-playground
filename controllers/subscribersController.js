//require subscriver module
const Subscriber = require('../models/subscriber_db');

exports.getAllSubscribers = (req, res, next) => { // pass data from the database to the next middleware function
   
  /* example of a callback  */

  //query with find on the subscriber model
    // Subscriber.find({}, (error, subscribers) => {
    //     //pass error to the next middleware function 
    //     if (error) next(error);
    //     //set data that comes back from mongoDb on request
    //     req.data = subscribers;
    //     next();

    // });

    /* using promises */

    Subscriber.find({}) 
      .exec() // return a promise from the find query 

      .then((Subscriber) => { //send saved data to the next then code block. 


        res.render('subscribers', { // serve result from the database 

          subscribers: subscribers
        });

      })
      .catch((error) => { //catch errors that are rejected in the promise 


        console.log(error.message);
        return [];

      })
      .then(() => { //end promise chani with a log message 

        console.log('promise complte');
      })


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



  /*
  
  1. first rendrs an ejs page from the views folder 
  2. .saveSubscriber collects data from the request and allows the 
  body paraser package to read the request body's conntents. 
  3. to read teh request body's conntents 
  4.a new model instance is created, mapping the subscribers fiels to 
  the request body paramenters/ 
  5. the subscriber issave if it fails respond with the error 
  that occured. it it succeeds repond with thanks.ejs 




  */
  




