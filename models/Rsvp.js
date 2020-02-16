// /models/Rsvp.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const rsvpSchema = new Schema(
  {
    rsvp: String,
    firstName: String,
    lastName: String,
    email: String,
    company: String,
  },
  { collection: 'rsvp' }
);

mongoose.model('rsvps', rsvpSchema);
