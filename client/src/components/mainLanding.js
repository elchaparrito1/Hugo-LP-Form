import React from 'react';
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';

const MainLanding = () => (
  <>
    <Element name="home">
      <section className="hero is-fullheight has-bg-img-main">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column"></div>
              <div className="column">
                <h2 className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                  Welcome to HUGO-LP Forums. We are a special invitation event
                  designed to bring together leading investors and asset
                  management firms.
                </h2>
              </div>
            </div>
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column"></div>
              <div className="column">
                <h2 className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                  <Link style={{ color: 'orange' }} to="/form">
                    Register
                  </Link>{' '}
                  for upcoming forum: Virtual Event on March 30-31, 2021
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  </>
);

export default MainLanding;
