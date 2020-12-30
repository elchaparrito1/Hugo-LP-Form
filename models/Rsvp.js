// /models/Rsvp.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const rsvpSchema = new Schema(
  {
    title: String,
    firstName: String,
    lastName: String,
    email: String,
    organization: String,
    confirmed: Boolean,
  },
  { collection: 'rsvp' }
);

mongoose.model('rsvps', rsvpSchema);
