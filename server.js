import { MONGO_URI } from './config';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Rsvp');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

require('./routes/rsvpRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function() {
  console.log(`Server is running on Port: ${PORT}`);
});
