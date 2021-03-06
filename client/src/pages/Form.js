import React from 'react';
import { FormNav } from '../components/navbars';
import EmailForm from '../components/emailForm';
import Footer from '../components/footer';
import '../App.scss';

const Form = () => (
  <>
    <section className="hero is-fullheight has-bg-img">
      <FormNav />
      <div className="hero-body">
        <div className="container">
          <EmailForm />
        </div>
      </div>
      <Footer />
    </section>
  </>
);

export default Form;
