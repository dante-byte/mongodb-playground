const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
                    yargs.version('1.1.0');

// create add command
yargs.command({

    command: 'add',
    describe: 'Add a new note',
    builder: { // an object with defined options, object configuration property
        title: {  // this is a property on the builder object that contains options
            //these are properties and options
            describe: 'Note title', //use to describe an option this is also an options
            demandOption: true, //use to force you to provide a title option set to false by default
            type: 'string' //user to force to use a string value

        },
        body: {

            describe: 'Note body!',
            demandOption: true,
            type: 'string'
        }

    },

    handler(argv) {


        notes.addNote(argv.title, argv.body)

        // console.log('Adding a new note!' , argv)
        // console.log('Title: ' + argv.title)
        //
        // console.log('Category: ' + argv.category)
    }
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note!',
    builder: { // use to add multiple options
        title: {

            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {


        notes.removeNote(argv.title);


        // console.log('removing the note ' + argv.title)

    }
});

//create list object

yargs.command({

    command: 'list',
    describe: 'list a note',


    handler() {

        notes.listNotes()

    }
});

// create read object

yargs.command({

    command: 'read',
    describe: 'read a note',
    builder: {

        title: {

            describe: 'read note',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv)  {

        notes.readNotes(argv.title);

    }

});





// add, remove, read, list

//console.log(process.argv);
//console.log(yargs.argv);


yargs.parse(); // parses out arguments















