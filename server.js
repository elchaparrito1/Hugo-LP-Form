const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Rsvp');
const sgMail = require('@sendgrid/mail');

const rsvpRoute = express.Router();
const interestRoute = express.Router();

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
    if (
      req.body.email === '' ||
      req.body.firstName === '' ||
      req.body.lastName === ''
    ) {
      throw new Error();
    }

    await sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    await Rsvp.create(req.body);

    const msg = {
      to: req.body.email,
      from: { email: 'phillip@hugo-lpf.com', name: 'Hugo-LP Forums' },
      templateId: 'd-b1d8dd5eb8b2466fac1bcf30269c6593',
      subject: 'Welcome to Hugo-LP Forums',
      dynamic_template_data: {
        name: req.body.firstName,
      },
    };

    await sgMail.send(msg, function(err, response) {
      if (err) {
        res.status(400).json('error');
      } else {
        res.status(201).json('email sent');
      }
    });
  } catch (err) {
    res.status(422).json('missing data');
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
    res.json(400, {});
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
