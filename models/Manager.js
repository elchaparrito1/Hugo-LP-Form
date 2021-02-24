// /models/Rsvp.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const managerSchema = new Schema(
  {
    type: String,
    fullName: String,
    email: String,
    phone: String,
    orgName: String,
    streetAddress: String,
    city: String,
    state: String,
    zipcode: String,
    confirmed: Boolean,
  },
  { collection: 'rsvpmanagers' }
);

mongoose.model('rsvpstwo', managerSchema);
