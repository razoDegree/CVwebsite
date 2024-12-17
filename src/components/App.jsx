import React from 'react';
import SmoothScroll from "./SmoothScroll";
import Header from './Header';
import LandingContiner from './LandingContiner';
import Video from './Video';
import ShortDescription from './ShortDescription';
import FloatingMemoji from './FloatingMemoji';
import ProjectSection from './ProjectsSection';
import CustomCursor from './CustomCursor';
import WorkHistory from './workHistory';
import Education from './Education';
import Carousel from './Carousel';
import MakeContact from './MakeContact';
import MagneticButton from './MagneticButton';

function App() {

  return (
    <>
      <CustomCursor>
        <FloatingMemoji />
        <SmoothScroll>
          <Header />
          <LandingContiner />
          <Video />
          <ShortDescription />
          <ProjectSection />
          <WorkHistory />
          <Education />
          <Carousel />
          <MakeContact />
          <MagneticButton />
        </SmoothScroll>
      </CustomCursor>
    </>
  );
}

export default App;
