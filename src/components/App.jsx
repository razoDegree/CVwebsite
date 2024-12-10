import React from 'react';
import SmoothScroll from "./SmoothScroll";
import Header from './header';
import LandingContiner from './LandingContiner';
import Video from './Video';
import ShortDescription from './ShortDescription';
import FloatingMemoji from './FloatingMemoji';
import ProjectSection from './ProjectsSection';
import CustomCursor from './CustomCursor';
import AboutMe from './AboutMe';
import MakeContact from './MakeContact';

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
          <AboutMe />
          <MakeContact />
        </SmoothScroll>
      </CustomCursor>
    </>
  );
}

export default App;
