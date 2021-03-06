/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';

const MainMeeting = () => {
  const sectionStyle = {
    backgroundColor: '#939393',
  };

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Element name="forum">
        <section style={sectionStyle} className="section">
          <div className="container">
            <div className="columns is-vcentered is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
              <div className="column is-5">
                <h2 className="title is-size-3-fullhd is-size-4-widescreen is-size-4-desktop is-size-5-touch is-size-5-tablet is-size-5-mobile">
                  HUGO Forums provides an exclusive and intimate setting to
                  achieve:
                </h2>
                <div className="content">
                  <ol className="is-upper-roman">
                    <h2 className="is-size-4-fullhd is-size-5-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                      <li>
                        Meaningful <em>interactions</em> between GP’s & LP’s
                      </li>
                    </h2>
                    <h2 className="is-size-4-fullhd is-size-5-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                      <li>
                        Relationship building among LP’s for future{' '}
                        <em>collaboration</em>
                      </li>
                    </h2>
                    <h2 className="is-size-4-fullhd is-size-5-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                      <li>
                        Professional <em>networking</em> for all attendees
                      </li>
                    </h2>
                  </ol>
                </div>
              </div>
              <div className="column is-2">
                {width >= 769 && <div className="separator"></div>}
                {width < 769 && <hr />}
              </div>
              <div className="column is-5">
                <h2 className="title is-size-3-fullhd is-size-4-widescreen is-size-4-desktop is-size-5-touch is-size-5-tablet is-size-5-mobile">
                  HUGO is not seeking to become the largest institutional
                  investment conference in our industry. Rather, our goal is to
                  be the premier investment forum for connecting top LP’s with
                  top GP’s.
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Element>
    </>
  );
};

export default MainMeeting;
