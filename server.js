import { rsvpRoute, confirmEmailRoute } from './routes/index';

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./models/Rsvp');

// setInterval(function() {
//   http.get("https://hugo-lp.herokuapp.com/");
// }, 300000);

const app = express();
require('dotenv').config({ path: '.env' });

const port = process.env.PORT || 5000;

// const Rsvp = mongoose.model('rsvps');

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

// interestRoute.route('/interested').post(async (req, res) => {
//   try {
//     const interested = await Rsvp.create(req.body);

//     return res.status(201).send({
//       error: false,
//       interested,
//     });
//   } catch (err) {
//     res.json(400, {});
//   }
// });
const apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.use('/rsvp', rsvpRoute);
apiRouter.use('/confirm-email', confirmEmailRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Server is running on Port: ${port}`);
});
