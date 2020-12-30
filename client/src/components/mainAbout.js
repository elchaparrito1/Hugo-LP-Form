/* eslint-disable no-unused-expressions */
import React from 'react';

const sectionStyle = {
  backgroundColor: '#939393',
};

const MainAbout = () => (
  <>
    <section id="forum" style={sectionStyle} className="section">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-half">
            <h2 className="title is-size-3-fullhd is-size-4-widescreen is-size-4-desktop is-size-5-touch is-size-5-tablet is-size-5-mobile">
              HUGO-LP Forums was created to bring together top tier E&F’s and
              sophisticated family offices toward two achievements:
            </h2>
          </div>
          <div className="column is-half">
            <div className="columns is-multiline is-vcentered">
              <div className="column is-12">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      1. Collaborate among fellow LP’s on investment strategies,
                      best practices, sourcing unique investment ideas
                    </div>
                  </div>
                </div>
              </div>
              <div className="column is-12">
                <div className="card">
                  <div className="card-content">
                    <div className="content">
                      2. Meet select differentiated GP’s in an efficient 2-day
                      event, in an exclusive gathering to meet, collaborate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default MainAbout;
