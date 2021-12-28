const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}
//add//
var addingNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);

  if(double.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log("Title already taken!");
  }
}
//remove//
var removeNote = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  if(filteredNotes.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log("Note not found!");
  }

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}
//read//
var readNote = function(title){
    var notes = fetchNotes();
    var note = notes.find((note) => note.title === title)
    if(note){
        console.log((note.title) + " : " +(note.body));
    }
    else{
        console.log("Note Not Found!");
    }
}

//list//
var getAll = function(){
    const notes = fetchNotes()
    
    console.log(" **ALL OF THE CREATED NOTES*** ");

    notes.forEach((note) => {
        console.log("Title : " + (note.title) + " Body : " + (note.body))
    });
}

module.exports = {
  addingNote,
  removeNote,
  readNote,
  getAll
}