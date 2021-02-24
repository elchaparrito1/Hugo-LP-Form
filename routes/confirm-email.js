import express from 'express';

require('../models/Investor');
require('../models/Manager');

const Investor = require('mongoose').model('rsvps');
const Manager = require('mongoose').model('rsvpstwo');

const confirmEmailRoute = express.Router();

export default confirmEmailRoute.post('', async (req, res) => {
  try {
    const email = req.body;
    const investor = await Investor.findOne(email);
    const manager = await Manager.findOne(email);
    if (investor) {
      res.status(201).send(investor);
    } else if (!investor && manager) {
      res.status(201).send(manager);
    } else {
      throw new Error('No credentials found');
    }
  } catch (e) {
    res.status(404).json(e.message);
  }
});
