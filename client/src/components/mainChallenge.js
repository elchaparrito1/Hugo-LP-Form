/* eslint-disable class-methods-use-this */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import challengeOnePhoto from '../images/challenge-1.jpg';
import challengeTwoPhoto from '../images/challenge-2.jpg';

const MainChallenge = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
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
            <Carousel
              swipeable
              draggable={false}
              showDots
              responsive={responsive}
              infinite
              keyBoardControl
              customTransition="all 1s ease-out"
              transitionDuration={1000}
              containerClass="carousel-container"
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <div className="challenge-container">
                  <figure className="image challenge-image-div">
                    <img
                      className="challenge-image"
                      src={challengeOnePhoto}
                      alt="Man looking out window"
                      style={{ width: '100%' }}
                    />
                  </figure>
                  <div className="challenge-text">
                    <table>
                      <tbody>
                        <tr>
                          <th style={{ color: 'white' }}>Our Solution:</th>
                        </tr>
                        <tr>
                          <th style={{ color: 'white' }}>
                            First: we invite a limited number of LP’s (primarily
                            sophisticated E&F’s and family offices).{' '}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div>
                <div className="challenge-container">
                  <figure className="image challenge-image-div">
                    <img
                      className="challenge-image"
                      src={challengeTwoPhoto}
                      alt="Hands on desk for business meeting"
                      style={{ width: '100%' }}
                    />
                  </figure>
                  <div className="columns">
                    <div className="column is-half">
                      <div className="challenge-text-two">
                        <table>
                          <tbody>
                            <tr>
                              <th style={{ color: 'white' }}>
                                Second: we carefully select top fund managers
                                from the key investment areas, including: PE,
                                VC, HF, RE, private credit and non-correlated
                                strategies.
                              </th>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="column is-half"></div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainChallenge;
