import React from 'react';
import { FormNav } from '../components/navbars';
import ManageRsvpForm from '../components/rsvpForms/managerRsvpForm';
import Footer from '../components/footer';
import '../App.scss';

const RSVP = () => (
  <>
    <section className="hero is-fullheight has-bg-img">
      <FormNav />
      <div className="hero-body">
        <div className="container">
          <ManageRsvpForm />
        </div>
      </div>
      <Footer />
    </section>
  </>
);

export default RSVP;
