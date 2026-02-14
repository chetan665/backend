// server ko start krna
// database se connect krna

const app = require('./src/app');

const mongoose = require('mongoose'); // library

// connect server and databse
function connectToDb() {
  mongoose
    .connect(
      'mongodb+srv://sachin:5718Uv0yPeyJdiXc@cluster0.ecvng7y.mongodb.net/day6'
    )
    .then(() => {
      console.log('Connected to database');
    });
}
connectToDb();

app.listen(3000, () => {
  console.log('server start running');
});
