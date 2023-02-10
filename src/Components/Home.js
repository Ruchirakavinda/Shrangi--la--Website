import React from 'react';
import {} from 'mdb-react-ui-kit';
import CoverSlider from './CoverSlider';
import Destinations from './Destinations';
import Experience from './Experience';
import Offers from './Offers';
import DemoCarousel from './feedbackSlider';

function Home() {

  return (
    <>
      <CoverSlider/>
      <Destinations/>
      <Experience/>
      <Offers/>
      <DemoCarousel/>
    </>

    );
}

export default Home;