import React, { useState } from 'react';
import Modal from './modal';
import pdf from '../documents/meeting-outline.pdf';
import oneOnOne from '../images/one-on-one-2.jpg';
import colab from '../images/collaboration.png';
import golf from '../images/golf.jpg';

const MainEvent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        offspring={
          <>
            <header className="modal-card-head has-background-grey-lighter">
              <p className="modal-card-title">Upcoming Venue:</p>
              <button
                type="button"
                className="delete"
                aria-label="close"
                onClick={handleModal}
              ></button>
            </header>
            <section className="modal-card-body has-background-grey-lighter">
              <div className="container">
                <h1 className="title has-text-centered is-size-4-fullhd is-size-5-widescreen is-size-6-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                  Hyatt Regency, Scottsdale Arizona
                </h1>
                <div id="wrapper">
                  <div id="parent">
                    <div className="columns is-mobile">
                      <div className="column is-9">
                        <h2 id="child">
                          Set amidst flowering cactus and framed against the
                          majestic McDowell Mountains, the{' '}
                          <a href="https://www.hyatt.com/en-US/hotel/arizona/hyatt-regency-scottsdale-resort-and-spa/scott">
                            Hyatt Regency
                          </a>{' '}
                          in Arizona resort is the perfect place for a forum.
                        </h2>
                      </div>
                      <div className="column is-3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot has-background-grey-lighter">
              <button type="button" className="button" onClick={handleModal}>
                Close
              </button>
            </footer>
          </>
        }
      />
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
                    <img alt="One on one meeting" className="" src={oneOnOne} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="main-event-text">LP/GP 1:1 Meetings</h2>
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div className="card equal-height">
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={colab} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="main-event-text">
                    LP's collaborate on best practices, mgr sourcing, etc.
                  </h2>
                </div>
              </div>
            </div>
            <br />
            <div className="column is-one-third">
              <div className="card equal-height">
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={golf} />
                  </figure>
                </div>
                <div className="card-content">
                  <h2 className="main-event-text">
                    Outdoor activity of golf and hiking
                  </h2>
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
          <br />
          <button type="button" className="pdf-download" onClick={handleModal}>
            <strong className="modal-test" style={{ fontSize: '1.5em' }}>
              +Forum Venue
            </strong>
          </button>
        </div>
      </section>
    </>
  );
};

export default MainEvent;
