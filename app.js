const express = require('express');
require('dotenv').config();

// Routers
const pictureRouter = require('./routes/pictureRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up routers
app.use('/pictures', pictureRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }

  console.log('App listening to requests on port ' + PORT + '.');
});
