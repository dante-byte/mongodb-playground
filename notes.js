const fs = require('fs');

exports.loadNotes = () => {

    try {

        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();

        return JSON.parse(dataJson);

    } catch (e) {


        return []
    }
}


exports.save = (notes) => {

    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
}

exports.add = (title, body) => {


    const notes = this.loadNotes();

    notes.push({

        title: title,
        body: body
    })

    this.save(notes);


}