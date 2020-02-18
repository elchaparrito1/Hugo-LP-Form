// /routes/rsvpRoutes.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const mongoose = require('mongoose');

const Rsvp = mongoose.model('rsvps');

module.exports = app => {
  app.get(`/api/rsvp`, async (req, res) => {
    const rsvp = await Rsvp.find();
    return res.status(200).send(rsvp);
  });

  app.post(`/api/rsvp`, async (req, res) => {
    console.log(process.env.SENDGRID_API_KEY);
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
};
