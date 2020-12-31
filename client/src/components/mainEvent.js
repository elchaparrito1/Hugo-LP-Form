import React from 'react';
import pdf from '../documents/meeting-outline.pdf';
import imgOne from '../images/one-on-one.jpg';
import imgTwo from '../images/roundtable-discussion.jpg';
import imgThree from '../images/follow-up.jpg';

const MainEvent = () => (
  <>
    <section className="section">
      <div className="container">
        <div className="columns has-text-centered">
          <div className="column is-full">
            <h1 className="title is-size-3-fullhd is-size-4-widescreen is-size-4-desktop is-size-5-touch is-size-5-tablet is-size-5-mobile">
              Featured Meeting Segments
            </h1>
          </div>
        </div>
        <br />
        <div className="columns is-vcentered has-text-centered">
          <div className="column has-text-centered is-one-third">
            <div className="card equal-height">
              <div className="card-image">
                <figure className="image-event is-480x480 is-inline-block">
                  <img alt="One on one meeting" className="" src={imgOne} />
                </figure>
              </div>
              <div className="card-content">
                <h2 className="main-event-text">LP / GP 1:1 Meetings</h2>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card equal-height">
              <div className="card-image">
                <figure className="image-event is-480x480 is-inline-block">
                  <img alt="One on one meeting" className="" src={imgTwo} />
                </figure>
              </div>
              <div className="card-content">
                <h2 className="main-event-text">Roundtable Discussions</h2>
              </div>
            </div>
          </div>
          <div className="column is-one-third">
            <div className="card equal-height">
              <div className="card-image">
                <figure className="image-event is-480x480 is-inline-block">
                  <img alt="One on one meeting" className="" src={imgThree} />
                </figure>
              </div>
              <div className="card-content">
                <h2 className="main-event-text">Post-forum Collaboration</h2>
              </div>
            </div>
          </div>
        </div>
        <button type="button" className="pdf-download">
          <a
            className="pdf-download"
            target="_blank"
            rel="noopener noreferrer"
            href={pdf}
          >
            <strong style={{ fontSize: '1.5em' }}>+Forum Outline</strong>
          </a>
        </button>
        {/* <br />
        <button type="button" className="pdf-download">
          <a
            className="pdf-download"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.hyatt.com/en-US/hotel/arizona/hyatt-regency-scottsdale-resort-and-spa/scott"
          >
            <strong style={{ fontSize: '1.5em' }}>+Forum Venue</strong>
          </a>
        </button> */}
      </div>
    </section>
  </>
);

export default MainEvent;
