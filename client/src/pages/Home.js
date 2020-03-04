import React from 'react';
import { MainNav } from '../components/navbar';
import MainLanding from '../components/mainLanding';
import MainChallenge from '../components/mainChallenge';
import MainMeeting from '../components/mainMeeting';
import MainVenue from '../components/mainVenue';

function Home() {
  return (
    <>
      <MainNav />
      <MainLanding />
      <MainChallenge />
      <MainMeeting />
      <MainVenue />
    </>
  );
}

export default Home;
