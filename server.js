const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Rsvp');

const rsvpRoute = express.Router();
const interestRoute = express.Router();
const sgMail = require('@sendgrid/mail');

// setInterval(function() {
//   http.get("https://hugo-lp.herokuapp.com/");
// }, 300000);

const app = express();
require('dotenv').config({ path: '.env' });

const port = process.env.PORT || 5000;

const Rsvp = mongoose.model('rsvps');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// ... other app.use middleware
app.use(express.static(path.join(__dirname, 'client', 'build')));

const db = process.env.MONGODB_URI;

mongoose.connect(db, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const { connection } = mongoose;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

rsvpRoute.route('/rsvp').post(async (req, res) => {
  try {
    sgMail.setApiKey(
      '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'
    );
    const rsvp = await Rsvp.create(req.body);
    const msg = {
      to: req.body.email,
      from: { email: 'phillip@hugo-lpf.com', name: 'Hugo-LP Forums' },
      templateId: process.env.SENDGRID_TEMPLATE_ID,
      subject: 'Welcome to Hugo-LP Forums',
      dynamic_template_data: {
        name: req.body.firstName,
      },
    };

    sgMail.send(msg);

    return res.status(201).send({
      error: false,
      rsvp,
    });
  } catch (err) {
    res.status(400).send({ error: true });
  }
});

interestRoute.route('/interested').post(async (req, res) => {
  try {
    const interested = await Rsvp.create(req.body);

    return res.status(201).send({
      error: false,
      interested,
    });
  } catch (err) {
    res.status(400).send({ error: true });
  }
});

app.use('/api', interestRoute);
app.use('/api', rsvpRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Server is running on Port: ${port}`);
});
