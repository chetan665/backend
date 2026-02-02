// Load express package
const express = require('express');

// Create server
const app = express();

// Home page route
app.get('/', (req, res) => {
  res.send('hi i am sachin, how are you');
});

// About page route
app.get('/about', (req, res) => {
  res.send('thankyou');
});

// Start server on port 3000
app.listen(3000, () => {
  console.log('server is running');
});

// This project uses a {.gitignore} file to hide (node_modules) and (.env files).
