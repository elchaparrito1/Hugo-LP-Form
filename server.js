const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Rsvp');
const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const rsvpRoute = express.Router();
const interestRoute = express.Router();
const confirmEmailRoute = express.Router();

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

confirmEmailRoute.route('/confirm-email').post(async (req, res) => {
  try {
    const email = req.body;
    const attendee = await Rsvp.findOne(email);
    if (attendee) {
      res.status(201).send(attendee);
    } else {
      throw new Error('No credentials found');
    }
  } catch (e) {
    res.status(404).json(e.message);
  }
});

rsvpRoute.route('/rsvp').post(async (req, res) => {
  try {
    console.log(req.body);
    const {
      title,
      firstName,
      lastName,
      email,
      organization,
      confirmed,
    } = req.body;

    await Rsvp.findOneAndUpdate(
      { email },
      {
        $set: {
          title,
          firstName,
          lastName,
          organization,
          confirmed,
        },
      },
      { useFindAndModify: false }
    );

    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY_V3;

    const apiInstance = new SibApiV3Sdk.SMTPApi();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail = {
      to: [
        {
          email: req.body.email,
          name: req.body.firstName,
        },
      ],
      templateId: 1,
      params: {
        name: req.body.firstName,
        email: req.body.email,
      },
      headers: {
        'X-Mailin-custom':
          'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
      },
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function() {
        res.status(201).json('email sent');
      },
      function() {
        res.status(400).json('error');
      }
    );
  } catch (err) {
    res.status(400).json('error');
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
app.use('/api', confirmEmailRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Server is running on Port: ${port}`);
});
