// require() is used to use packages that were installed using npm install

//cat-me -> package
let cat_me = require('cat-me');
console.log(cat_me());

// express (server) -> package
const express = require('express'); //install package

const app = express(); // create server

app.listen(3000); //start the server
