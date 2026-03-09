const express = require('express');
const mongoose = require('mongoose');

const app = express();

// middleware to read JSON body
app.use(express.json());

/* -------------------------
   Schema: structure of book
------------------------- */
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});

/* -------------------------
   Model: tool to interact with MongoDB
------------------------- */
const Book = mongoose.model('books', bookSchema);

/* -------------------------
   POST /books
   Create a new book
------------------------- */
app.post('/books', async (req, res) => {
  await Book.create(req.body);
  res.send('Book created successfully');
});

/* -------------------------
   GET /books/:id
   Find book by id
------------------------- */
app.get('/books/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.send(book);
});

module.exports = app;
