import React, { useState } from 'react';
import pdf from '../documents/meeting-outline.pdf';
import imgOne from '../images/one-on-one.jpg';
import imgTwo from '../images/roundtable-discussion.jpg';
import imgThree from '../images/follow-up.jpg';

const MainEvent = () => {
  const [cursorImg1, setCursorImg1] = useState(false);
  const [cursorImg2, setCursorImg2] = useState(false);
  const [cursorImg3, setCursorImg3] = useState(false);

  return (
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
              <div
                className="card equal-height"
                onMouseEnter={() => setCursorImg1(!cursorImg1)}
                onMouseLeave={() => setCursorImg1(!cursorImg1)}
              >
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={imgOne} />
                  </figure>
                </div>
                <div className="card-content">
                  {!cursorImg1 ? (
                    <h2 className="main-event-text">LP / GP 1:1 Meetings</h2>
                  ) : (
                    <h2 className="main-event-text">
                      HUGO will introduce LP’s to GP’s. LP’s can select from the
                      GP line-up those they wish to meet with. HUGO will arrange
                      1:1 virtual meetings during the forum.
                    </h2>
                  )}
                </div>
              </div>
            </div>

            <div className="column is-one-third">
              <div
                className="card equal-height"
                onMouseEnter={() => setCursorImg2(!cursorImg2)}
                onMouseLeave={() => setCursorImg2(!cursorImg2)}
              >
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={imgTwo} />
                  </figure>
                </div>
                <div className="card-content">
                  {!cursorImg2 ? (
                    <h2 className="main-event-text">Roundtable Discussions</h2>
                  ) : (
                    <h2 className="main-event-text">
                      The HUGO LP Forum will include some virtual roundtable
                      discussion groups on areas of current interest.
                    </h2>
                  )}
                </div>
              </div>
            </div>
            <div className="column is-one-third">
              <div
                className="card equal-height"
                onMouseEnter={() => setCursorImg3(!cursorImg3)}
                onMouseLeave={() => setCursorImg3(!cursorImg3)}
              >
                <div className="card-image">
                  <figure className="image-event is-480x480 is-inline-block">
                    <img alt="One on one meeting" className="" src={imgThree} />
                  </figure>
                </div>
                <div className="card-content">
                  {!cursorImg3 ? (
                    <h2 className="main-event-text">
                      Post-forum Collaboration
                    </h2>
                  ) : (
                    <h2 className="main-event-text">
                      After the forum LP's can collaborate on: best practices,
                      discuss GP’s met during HUGO, and share ideas for
                      co-diligencing managers, etc. HUGO can identify areas of
                      common interest and connect LP’s who wish to collaborate.
                    </h2>
                  )}
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
        </div>
      </section>
    </>
  );
};

export default MainEvent;
