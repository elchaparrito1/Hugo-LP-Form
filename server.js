const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Rsvp');

const app = express();

const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

require("dotenv").config({ path: ".env" });
app.use(cors());
app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@hugo-cluster-fla8c.mongodb.net/hugo?retryWrites=true&w=majority`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

require('./routes/rsvpRoutes')(app);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});


app.listen(port, function() {
  console.log(`Server is running on Port: ${port}`);
});
