// Import Express framework
let express = require('express');

// Create the server application
let app = express(); // server create ho jata hai

// Middleware to parse incoming JSON data from client
app.use(express.json()); // middleware

// This array stores all notes in memory (temporary storage)
const notes = []; // empty array

// ==========================
//  POST → Add new note
// ==========================
// Client sends data in body → we store it in notes array
app.post('/', (req, res) => {
  // req.body contains the data sent by client
  notes.push(req.body);

  // Send confirmation response
  res.send('successfully send');
});

// ==========================
//  GET → Get all notes
// ==========================
// Sends all stored notes back to client
app.get('/', (req, res) => {
  // Logs notes on server console
  console.log(notes);

  // Sends notes array as response
  res.send(notes);
});

// ==========================
//  DELETE → Delete note by index
// ==========================
app.delete('/:id', (req, res) => {
  // delete removes the value at given index but leaves empty slot
  delete notes[req.params.id];

  // Show updated notes in console
  console.log(notes);

  // Send updated notes back to client
  res.send(notes);
});

// ==========================
// PATCH → Update part of a note
// ==========================
app.patch('/:index', (req, res) => {
  // Updates only the "day" property of the note
  notes[req.params.index].day = req.body.day;

  // Send confirmation response
  res.send('successfullu modified');
});

module.exports = app;
