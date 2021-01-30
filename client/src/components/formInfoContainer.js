import React from 'react';
import RsvpForm from './rsvpForm';

const FormInfoContainer = () => (
  <>
    <div className="columns">
      <div className="column is-centered">
        <div className="container">
          <div className="notification">
            <section className="section">
              <div className="container">
                <h1 className="title">Virtual Event</h1>
                <h2 className="subtitle">March 30 - March 31</h2>
                <h2 className="subtitle">
                  {' '}
                  HUGO Forum is an invitation-only event that allows investors
                  to meet multiple managers in small LP groups. Our upcoming
                  forum will be a virtual event. The event provides an efficient
                  platform to meet other investors and managers over two
                  half-day sessions.
                </h2>
                <hr />
                <h2 className="subtitle">
                  <strong>Investor Participation</strong>
                </h2>
                <p>
                  HUGO-LP Forums are by invitation only. Please enter your email
                  below to confirm your invitation, and participation in the
                  upcoming forum listed above.
                </p>
              </div>
              <br />
              <RsvpForm />
            </section>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default FormInfoContainer;
