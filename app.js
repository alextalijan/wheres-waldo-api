const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Import routers
const pictureRouter = require('./routes/pictureRouter');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up cors
app.use(cors());

// Set up json parsing for incoming requests
app.use(express.json());

// Set up routers
app.use('/pictures', pictureRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  }

  console.log('App listening to requests on port ' + PORT + '.');
});
