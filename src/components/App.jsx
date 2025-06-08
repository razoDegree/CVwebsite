import React from 'react';
import SmoothScroll from "./SmoothScroll";
import Header from './Header';
import LandingContiner from './LandingContiner';
import Video from './Video';
import ShortDescription from './ShortDescription';
import FloatingMemoji from './FloatingMemoji';
import ProjectSection from './ProjectsSection';
import CustomCursor from './CustomCursor';
import WorkHistory from './WorkHistory';
import Education from './Education';
import Carousel from './Carousel';
import MakeContact from './MakeContact';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID
    const isProd = import.meta.env.MODE === 'production'

    if (!GA_ID || !isProd) return

    const script1 = document.createElement('script')
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script1.async = true
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}');
    `
    document.head.appendChild(script2)
  }, [])

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
          </SmoothScroll>
        </CustomCursor>
      </>
    );
  }
}

export default App;
