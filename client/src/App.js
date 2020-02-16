/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import LogoHeader from './components/header';
import RsvpForm from './components/rsvpForm';
import './App.scss';

/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */

const App = () => (
  <>
    {/* <Head>
      <link rel="stylesheet" href="../static/css/view.css" />
    </Head> */}
    <section className="hero is-fullheight has-bg-img">
      <LogoHeader />
      <div className="hero-body">
        <div className="container">
          <RsvpForm />
        </div>
      </div>
    </section>
  </>
);

export default App;
