const fs = require('fs');
const chalk = require('chalk');







/**
 * ADD NOTE FUNCTION:
 * 1. add note function to load in notes
 * 2. checks if a tiles is alread added
 *  * look throug array using array filter method
 */
const addNote = (title, body ) => {
//function used to write notes file to json returns an empty if array if no file is found
const notes = loadNotes();
    // creates an array that checks if a notes already exist using the filter function
    // const duplicateNotes = notes.filter(function (notes) {
    //
    //     return notes.title === title;
    //
    // });
const duplicateNotes = notes.find((notes) => notes.title === title);

if (!duplicateNotes) {

        notes.push({ // add notes to array object if empty

            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.green('new note added'));

    } else {

        console.log(chalk.red('note title taken!'));
    }
    // console.log(notes);
};

/**
 *
 * SAVE NOTE FUNCTION
 * 1. function to save notes
 * 2. writes function to notes.json
 *
 *
 */
const saveNotes = (notes) => {
    const dataJSON  = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
};
/**
 *
 * LOAD NOTES FUNCTION
 * returns array of notes
 * 1. attempts to read notes to notes. json if no file exixt
 * it returns an empty array using a try catch block
 */



const loadNotes = () => {
    // if a file notes.json is not found return an empty array
    try {

        const dataBuffer = fs.readFileSync('notes.json'); // read data
        const dataJSON = dataBuffer.toString(); // return data in string
        return JSON.parse(dataJSON); // parse data as an object

    } catch (e) {

        return []
    }
};
/**
 *
 * REMOVE NOTES FUNCTION
 */
const removeNote = (title) =>  {

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title);
    if (notes.length > notesToKeep.length){

        console.log(chalk.green('note removed'));

        saveNotes(notesToKeep);

    } else {

        console.log(chalk.red('No note found'));
    }
};

const readNotes = (title) => {




    const allNotes = loadNotes();


    const oneNote = allNotes.find((allNotes) => allNotes.title === title);

    if (!oneNote){

        console.log(chalk.red('note not found'));

    } else {


        console.log("note title " + oneNote.title + " " + "note body " +  oneNote.body);

    }







};



const getNote =  () => {


    console.log("listing your notes")


};


const listNotes = () => {

    console.log('printing your notes: ');

    const notes = loadNotes();

    let i = 0;

    notes.forEach((notes) => {


        i = i+1;

        console.log( i + '. ' +  notes.title);
    })
};


/** read notes  */


//use to export a single function module.exports = getNotes; // load a function into another javascript file

module.exports = {

    getNote: getNote,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};


