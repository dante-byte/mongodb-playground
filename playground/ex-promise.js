

let p = new Promise((resolve, reject) => {

    let a = 1 + 5;

    if (a == 3) {

        resolve('success');

    } else {

        reject('failed');

    }
});

p.then((message) => {

    console.log('this is in the then ' + message);
}).catch((message) => {

    console.log('tihs is in the catch ' + message);

})


let sub = new Promise((resolve1, reject2) => {

    let subtract = 2 - 4;

    if (subtract == 0) {

        resolve1('success')
    } else {

        reject2('failed')
    }
})


sub.then((message) => {

    console.log('the then thing' + message)
}).catch((message) => {

    console.log('the other stuff ' + message);
})

/*

important 
with using exec you're still able to use then anc catch 
to handle follow-up commands. with exec however 
you won't have an authentic promise-only mongoose 
versoin of a promise query. Some Mongoose methods, 
however such as save return a promise and won't with 
exec. 
http://mongoosejs.com/docs/promises.html.


if an error occusrs in the process the error propagates 
down the promise chain to the catch blovk 
otherwise data returned from the query passses on 
tot hte next then block 
this promise chain procedrue follows the promise conventon 
of rejectin or resolving 
code in a promise block 
to determine what code should be run next 

1. the initial query is run through mongoose.js
on mongodb databsse rturning a promise that resolves 
with data or rejects an error. find({})

2. then - at each block in the promise chain an error can 
occur in which case promsie rejection sends propogation 
directly to the catch block. Otherwise earch subequent 
.then block is resolved and handled. 

3. catch -at any stage in the promise chain an error can be
rejected causing the chain to culminate in the .catch block 
in this block you can handle the error. 

.then - if no error occur at the end of each stage 
the resultin gdata can be passed to anotehr middleware 
function or rendered o the screen /






*/


// example of a promise 

/* app.get('/books', (req, res) => {

    console.log('getting all books');

    Book.find({}).exec()
    .then((books) => {

        console.log(books);
        res.json(books);

    }).catch((err ) => {
        res.send('error occured')
    })

})

*/

/*

a promose is a js objet that contains 
information about the stat of a function 
call and what the next call in the chain 
needs to see 

promise allaw function to start and patiently 
wait for it to complete before passssing it off 
to the next call back function 


to use promise mongoose.Promise = global.Promise 

with eacu query made you can choose ot return the 
normal database reponse or promise containg that 
response. a query to get all subscribers from 
the database response. 


*/