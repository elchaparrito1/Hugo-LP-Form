const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Rsvp');
const rsvpRoute = express.Router();
const sgMail = require('@sendgrid/mail');

const app = express();
require("dotenv").config({ path: ".env" });

const port = process.env.PORT || 5000;

const Rsvp = mongoose.model('rsvps');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

const MONGODB_URI = process.env.MONGODB_URI || process.env.MY_MONGODB_URI

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
})

rsvpRoute.route('/rsvp').post(async (req, res) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
});

app.use('/api', rsvpRoute);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, function() {
  console.log(`Server is running on Port: ${port}`);
});
