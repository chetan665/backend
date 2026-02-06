// POST, GET
// create server in backend where user create nodes and see that nodes

// Import Express framework
const express = require('express');

// Create an Express app (our server)
const app = express();

// Middleware to read JSON data sent by client
app.use(express.json());

// Temporary storage for notes (acts like a small database)
const notes = [];

/*
  POST /
  Used to CREATE a new note
  Client sends data in req.body
*/
app.post('/', (req, res) => {
  console.log(req.body); // See incoming note in terminal
  notes.push(req.body); // Store note in array
  res.send('Note created'); // Send response back to client
});

/*
  GET /
  Used to READ all notes
  Sends back the full notes array
*/
app.get('/', (req, res) => {
  res.send(notes); // Return all saved notes
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
