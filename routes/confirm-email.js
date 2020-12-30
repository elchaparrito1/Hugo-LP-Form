import express from 'express';

require('../models/Rsvp');

const Rsvp = require('mongoose').model('rsvps');

const confirmEmailRoute = express.Router();

export default confirmEmailRoute.post('', async (req, res) => {
  try {
    console.log('this running?');
    const email = req.body;
    const attendee = await Rsvp.findOne(email);
    console.log(attendee);
    if (attendee) {
      res.status(201).send(attendee);
    } else {
      throw new Error('No credentials found');
    }
  } catch (e) {
    res.status(404).json(e.message);
  }
});
