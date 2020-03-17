/* eslint-disable class-methods-use-this */
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import time from '../images/calendar.png';
import access from '../images/lock.png';

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
                <div className="columns is-gapless is-mobile">
                  <div className="column is-10">
                    <h2 className="is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                      <li>
                        TIME: limited time, the most precious commodity of
                        investors today.
                      </li>
                    </h2>
                  </div>
                  <div className="column is-2">
                    <img alt="time icon" src={time} width="40" height="40" />
                  </div>
                </div>

                <div className="columns is-gapless is-mobile">
                  <div className="column is-10">
                    <h2 className="is-size-4-fullhd is-size-4-widescreen is-size-5-desktop is-size-6-touch is-size-6-tablet is-size-6-mobile">
                      <li>
                        ACCESS: finding and sourcing top investment strategies.
                      </li>
                    </h2>
                  </div>
                  <div className="column is-2">
                    <img alt="time icon" src={access} width="40" height="40" />
                  </div>
                </div>
              </ol>
            </div>
          </div>
          <div className="column is-half">
            <Carousel
              swipeable
              draggable={false}
              showDots
              autoPlay
              autoPlaySpeed={8000}
              responsive={responsive}
              infinite
              keyBoardControl
              customTransition="all 1s ease-out"
              transitionDuration={1000}
              containerClass="carousel-container"
              // removeArrowOnDeviceType={['mobile']}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div>
                <div className="banner-one">
                  <div className="banner-text">
                    <div className="columns is-mobile">
                      <div className="column is-2"></div>
                      <div
                        className="column is-5"
                        style={{ backgroundColor: 'black' }}
                      >
                        <h6>
                          TIME SOLUTION: we take the time to find and extend an
                          exclusive invitation to a limited number of top-tier
                          LP’s
                        </h6>
                      </div>
                      <div className="column is-5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="banner-two">
                  <div className="banner-text">
                    <div className="columns is-mobile">
                      <div className="column is-2"></div>
                      <div
                        className="column is-5"
                        style={{ backgroundColor: 'black' }}
                      >
                        <h6>
                          ACCESS SOLUTION: we then carefully screen GP's to
                          select top fund mgrs from PE, VC, RE, HF, and
                          Non-correlated strategies.
                        </h6>
                      </div>
                      <div className="column is-5"></div>
                    </div>
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
