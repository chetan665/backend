let mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://chetandhiman485_db_user:ueBxpU9l46QSlHud@cluster0api.nfeobqh.mongodb.net/schema-practice'
  )
  .then(() => {
    console.log('successfully connected');
  })
  .catch(() => {
    console.log('some error occured');
  });
