//server create krna
//server ko config krna

const express = require('express');
const app = express();

app.use(express.json());
const notes = [];

/* POST / notes  */
app.post('/about', (req, res) => {
  notes.push(req.body);

  // res.send('request received'); -------->  changed to status
  res.status(201).json({ message: 'data send successfully' });
});

/* GET / notes  */
app.get('/about', (req, res) => {
  res.status(200).json({ notes: notes });
});

/*  DELETE / notes / :index*/

app.delete('/about/:index', (req, res) => {
  delete notes[req.params.index];

  res.status(204).json({ message: 'successfully deleted' });
});

/* PATCH / notes /:index  */
app.patch('/about/:index', (req, res) => {
  notes[req.params.index].description = req.body.description;

  res.status(200).json({
    message: 'note updated successfully',
  });
});

module.exports = app;
