import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainChallenge = () => {
  const handleOnDragStart = e => e.preventDefault();
  return (
    <AliceCarousel
      mouseTrackingEnabled
      // autoPlayInterval={6000}
      // autoPlayDirection="ltr"
      // autoPlay
    >
      <section className="section" style={{ backgroundColor: 'green' }}>
        <div className="container">
          <div onDragStart={handleOnDragStart} className="yours-custom-class">
            <div className="test-fade">
              <h1>This workin?</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'blue' }}>
        <div className="container">
          <div onDragStart={handleOnDragStart} className="yours-custom-class">
            <h1>This workin?</h1>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'orange' }}>
        <div className="container">
          <div onDragStart={handleOnDragStart} className="yours-custom-class">
            <h1>This workin?</h1>
          </div>
        </div>
      </section>
    </AliceCarousel>
  );
};

export default MainChallenge;
