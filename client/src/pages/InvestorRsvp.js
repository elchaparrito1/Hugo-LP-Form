import React from 'react';
import { FormNav } from '../components/navbars';
import InvestorRsvpForm from '../components/rsvpForms/investorRsvpForm';
import Footer from '../components/footer';
import '../App.scss';

const RSVP = () => (
  <>
    <section className="hero is-fullheight has-bg-img">
      <FormNav />
      <div className="hero-body">
        <div className="container">
          <InvestorRsvpForm />
        </div>
      </div>
      <Footer />
    </section>
  </>
);

export default RSVP;
