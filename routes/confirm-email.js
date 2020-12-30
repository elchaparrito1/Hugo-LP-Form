import express from 'express';
import Rsvp from '../models/Rsvp';

const confirmEmailRoute = express.Router();

export default confirmEmailRoute.post('', async (req, res) => {
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
