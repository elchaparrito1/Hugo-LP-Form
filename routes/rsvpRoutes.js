// /routes/rsvpRoutes.js

import {
  SENDGRID_API_KEY,
  SENDGRID_TEMPLATE_ID,
  SENDGRID_USERNAME,
  SENGRID_PASSWORD,
} from '../config';

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(SENDGRID_API_KEY);

const mongoose = require('mongoose');

const Rsvp = mongoose.model('rsvps');

module.exports = app => {
  app.get(`/api/rsvp`, async (req, res) => {
    const rsvp = await Rsvp.find();
    return res.status(200).send(rsvp);
  });

  app.post(`/api/rsvp`, async (req, res) => {
    const rsvp = await Rsvp.create(req.body);
    const msg = {
      to: req.body.email,
      from: 'phillip@hugo-lpf.com',
      templateId: SENDGRID_TEMPLATE_ID,
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
};
