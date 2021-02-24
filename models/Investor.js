// /models/Rsvp.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const investorSchema = new Schema(
  {
    type: String,
    title: String,
    firstName: String,
    lastName: String,
    email: String,
    organization: String,
    numberOfTeam: String,
    assetClasses: Array,
    confirmed: Boolean,
  },
  { collection: 'rsvp' }
);

mongoose.model('rsvps', investorSchema);
