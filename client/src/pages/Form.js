import React from 'react';
import { FormNav } from '../components/navbars';
import FormInfoContainer from '../components/forms/formInfoContainer';
import Footer from '../components/footer';
import '../App.scss';

const Form = () => (
  <>
    <section className="hero is-fullheight has-bg-img">
      <FormNav />
      <div className="hero-body">
        <div className="container">
          <FormInfoContainer />
        </div>
      </div>
      <Footer />
    </section>
  </>
);

export default Form;
