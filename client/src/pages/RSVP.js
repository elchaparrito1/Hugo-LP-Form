import React from 'react';
import { FormNav } from '../components/navbars';
// import FormInfoContainer from '../components/formInfoContainer';
import Footer from '../components/footer';
import '../App.scss';

const RSVP = () => (
  <>
    <section className="hero is-fullheight has-bg-img">
      <FormNav />
      <div className="hero-body">
        <div className="container">
          <h1>Hi</h1>
        </div>
      </div>
      <Footer />
    </section>
  </>
);

export default RSVP;
