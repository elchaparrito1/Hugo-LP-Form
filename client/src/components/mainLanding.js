import React from 'react';
import { Element } from 'react-scroll';
import pdf from '../documents/meeting-outline.pdf';

const MainLanding = () => (
  <>
    <Element name="home">
      <section className="hero is-fullheight has-bg-img-main">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column is-half is-offset-6">
                <h2 className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                  Welcome to HUGO-LP Forums. We are a special invitation event
                  designed to bring together leading investors and asset
                  managers.
                </h2>
              </div>
            </div>
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column is-half is-offset-6">
                <h2 className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                  <u>Upcoming event:</u> HUGO Fall Forum
                </h2>
              </div>
            </div>
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column is-half is-offset-6">
                <h2 className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                  <u>Date:</u> Nov 16-17, 2021
                </h2>
              </div>
            </div>
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column is-half is-offset-6">
                <h2 className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                  <u>Meeting info:</u>{' '}
                  <button type="button" className="pdf-download">
                    <a
                      className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile pdf-download"
                      style={{ color: 'orange' }}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={pdf}
                    >
                      Agenda
                    </a>
                  </button>
                </h2>
              </div>
            </div>
            <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column is-half is-offset-6">
                <div className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                  <u>Register now:</u>{' '}
                  <h2 className="custom-h2 is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-5-touch is-size-6-tablet is-size-6-mobile">
                    <a
                      style={{ color: 'orange' }}
                      href="https://www.eventbrite.com/e/hugo-lp-forums-fall-2021-virtual-forum-tickets-170390105392"
                      target="_blank"
                      rel="noreferrer"
                    >
                      REGISTRATION
                    </a>{' '}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  </>
);

export default MainLanding;
