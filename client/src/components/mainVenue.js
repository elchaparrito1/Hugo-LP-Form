import React from 'react';
import HyattSpa from '../images/Hyatt-Spa.jpg';
import HyattNight from '../images/Hyatt-night.jpg';

const MainVenue = () => (
  <>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-8">
            <h1 className="title">
              Upcoming Venue: Hyatt Regency - Scottsdale, Arizona
            </h1>
            <br />
            <h2 className="subtitle">
              Hyatt Regency Scottsdale Resort & Spa at Gainey Ranch offers over
              70,000 square feet of indoor and outdoor function space. Set
              amidst flowering cactus and framed against the majestic McDowell
              Mountains, this Arizona destination resort is the perfect place
              for a forum.
            </h2>
            <div className="buttons">
              <a
                className="button"
                href="https://www.hyatt.com/en-US/hotel/arizona/hyatt-regency-scottsdale-resort-and-spa/scott"
              >
                <strong>Visit</strong>
              </a>
            </div>
          </div>
          <div className="column is-4">
            <div className="image-stack">
              <div className="image-stack__item image-stack__item--top">
                <img className="venue-img" src={HyattSpa} alt="Vista of spa" />
              </div>
              <div className="image-stack__item image-stack__item--bottom">
                <img
                  className="venue-img"
                  src={HyattNight}
                  alt="Vista of hotel"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default MainVenue;
