import React from 'react';
import { Element } from 'react-scroll';

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
                  Welcome to Hugo LP Forums. We are a special invitation summit
                  designed to bring together leading LP’s and GP’s.
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
