import React from 'react';
import solutionImg from '../images/solution.jpg';

const figureStyle = {
  margin: 'auto',
  width: '100%',
  height: '100%',
  display: 'block',
  opacity: '0.5',
};

const MainChallenge = () => (
  <>
    <section className="section">
      <div className="container">
        <div className="columns is-vcentered is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
          <div className="column is-half">
            <h1 className="title is-size-3-fullhd is-size-3-widescreen is-size-4-desktop is-size-5-touch is-size-5-tablet is-size-5-mobile">
              Capital allocators face two key challenges today:
            </h1>
            <div className="content is-size-7-mobile">
              <ol type="1">
                <h2 className="is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                  <li>
                    Having enough time, which is the most precious commodity of
                    investors today.
                  </li>
                </h2>
                <h2 className="is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                  <li>
                    Successfully accessing top tier investment strategies.
                  </li>
                </h2>
              </ol>
            </div>
          </div>
          <div className="column is-half">
            <figure className="image">
              <div className="special-container">
                <img
                  src={solutionImg}
                  alt="solution"
                  style={figureStyle}
                  className="is-rounded figure-style"
                />
                <div className="wrapper">
                  <div className="background background-filter">
                    <h2 className="special-solution-text is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                      The Solution
                    </h2>
                  </div>
                </div>
                <div className="special-overlay">
                  <div className="special-text">
                    <p className="is-size-5-fullhd is-size-6-widescreen is-size-6-desktop p-text">
                      At each forum we invite a limited number of LP’s
                      (primarily sophisticated E&F’s and family offices).
                    </p>
                    <br />
                    <p className="is-size-5-fullhd is-size-6-widescreen is-size-6-desktop p-text">
                      Then we carefully select top fund managers from the key
                      investment areas, such as: PE, VC, HF, RE, private credit
                      and non-correlated strategies
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default MainChallenge;
