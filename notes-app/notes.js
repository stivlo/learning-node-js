const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes...";
};

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNote = note.find(note => note.title === title);
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green('New note added!'));
    } else {
        console.log(chalk.red('Note title taken!'));
    }
};

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter(note => note.title.toUpperCase() !== title.toUpperCase());
    if (notes.length === notesToKeep.length) {
        console.log(chalk.red('Note not found'));
    } else {
        saveNotes(notesToKeep);
        console.log(chalk.green('Note deleted'));
    }
};

const listNotes = () => {
    console.log(chalk.blue.inverse(" Your notes: "));
    loadNotes().forEach(n => console.log(n.title));
};

const readNote = (title) => {
    const note = loadNotes().find(note => note.title.toUpperCase() === title.toUpperCase());
    if (note) {
        console.log(chalk.blue.inverse(' ' + note.title + ' '));
        console.log(note.body);
    } else {
        console.log(chalk.red('Note not found'));
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJson);
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
