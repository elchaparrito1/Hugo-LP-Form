import React from 'react';
import { MainNav } from '../components/navbar';
import MainLanding from '../components/mainLanding';
import MainAbout from '../components/mainAbout';
import MainChallenge from '../components/mainChallenge';
import MainMeeting from '../components/mainMeeting';
import MainEvent from '../components/mainEvent';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <MainNav />
      <MainLanding />
      <MainAbout />
      <MainChallenge />
      <MainMeeting />
      <MainEvent />
      <Footer />
    </>
  );
}

export default Home;
