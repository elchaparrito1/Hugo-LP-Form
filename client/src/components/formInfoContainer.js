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
                <h1 className="title">Fall Forum</h1>
                <h2 className="subtitle">November 2 - November 5</h2>
                <h2 className="subtitle">
                  {' '}
                  Forum designed to optimize your time with a unique meeting
                  format of effective one-on-one LP/GP meetings. The focus of
                  the forum is facilitating 1:1 meetings with managers of your
                  choice.
                </h2>
                <hr />
                <h2 className="subtitle">
                  <strong>Investor Participation</strong>
                </h2>
                <p>
                  Please fill out the form below if you are interested in
                  participating in the forum, or would like to receive more
                  information, if interested in future forums.
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
