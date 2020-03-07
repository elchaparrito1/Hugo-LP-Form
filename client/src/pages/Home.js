import React from 'react';
import { MainNav } from '../components/navbar';
import MainLanding from '../components/mainLanding';
import MainChallenge from '../components/mainChallenge';
import MainMeeting from '../components/mainMeeting';
import MainVenue from '../components/mainVenue';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <MainNav />
      <MainLanding />
      <MainChallenge />
      <MainMeeting />
      <MainVenue />
      <Footer />
    </>
  );
}

export default Home;
