const fs = require('fs');
const chalk = require('chalk');

//Add note functionality
const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  duplicateNote && duplicateNote.length !== 0
    ? console.log(chalk.red.inverse('Note title taken'))
    : (notes.push({
        title: title,
        body: body
      }),
      console.log('New note added'));

  saveNotes(notes);
};

//Remove Note functionality
const removeNote = title => {
  let notes = loadNotes();
  const removingNotes = notes.filter(note => note.title === title);
  removingNotes && removingNotes.length > 0
    ? console.log(chalk.green.inverse(`${title} note is removed`))
    : console.log(
        chalk.red.inverse(
          `${title} note not present, Please provide correct title to remove`
        )
      );
  notes = notes.filter(note => note.title !== title);
  saveNotes(notes);
};

//list notes functionality
const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue('Your notes'));
  notes.forEach(note => console.log(note.title));
};

//read note functionality
const readNote = title => {
  const notes = loadNotes();
  const note = notes.find(note => note.title === title);

  note
    ? (console.log(chalk.inverse(note.title)), console.log(note.body))
    : console.log(chalk.red.inverse(`${title} is not found`));
};

const saveNotes = notes => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { addNote, removeNote, listNotes, readNote };
