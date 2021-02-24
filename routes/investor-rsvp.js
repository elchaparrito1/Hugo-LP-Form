import express from 'express';

require('../models/Investor');
require('../models/Manager');

const Rsvp = require('mongoose').model('rsvps');

const SibApiV3Sdk = require('sib-api-v3-sdk');

const defaultClient = SibApiV3Sdk.ApiClient.instance;

const investorRsvpRoute = express.Router();

export default investorRsvpRoute.post('', async (req, res) => {
  try {
    const {
      type,
      title,
      firstName,
      lastName,
      email,
      organization,
      assetClasses,
      numberOfTeam,
      confirmed,
    } = req.body;

    await Rsvp.findOneAndUpdate(
      { email },
      {
        $set: {
          type,
          title,
          firstName,
          lastName,
          organization,
          assetClasses,
          numberOfTeam,
          confirmed,
        },
      },
      { useFindAndModify: false }
    );

    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.SENDINBLUE_API_KEY_V3;

    const apiInstance = new SibApiV3Sdk.SMTPApi();

    let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail = {
      to: [
        {
          email: req.body.email,
          name: req.body.firstName,
        },
      ],
      templateId: 1,
      params: {
        name: req.body.firstName,
        email: req.body.email,
      },
      headers: {
        'X-Mailin-custom':
          'custom_header_1:custom_value_1|custom_header_2:custom_value_2',
      },
    };

    apiInstance.sendTransacEmail(sendSmtpEmail).then(
      function() {
        res.status(201).json('email sent');
      },
      function() {
        res.status(400).json('error');
      }
    );
  } catch (err) {
    res.status(400).json('error');
  }
});
