import React from 'react';
import { FormNav } from '../components/navbar';
import FormInfoContainer from '../components/formInfoContainer';
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
    </section>
  </>
);

export default Form;
