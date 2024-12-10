import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import memoji from "../assets/memoji.gif";
import gsap from 'gsap';

// Styled component for CircleContainer
const CircleContainer = styled.div`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  position: fixed;
  bottom: 6vh;
  right: 6vw;
  overflow: hidden;
  z-index: 1;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
  background-color: white;
  cursor: pointer;
  opacity: 0; /* Start with invisible */
  transform: scale(0); /* Start with scaled-down */
  visibility: hidden; /* Hide initially */
`;

const Memoji = () => (
  <div
    style={{
      position: 'absolute',
      top: '51%',
      left: '35%',
      transform: 'translate(-50%, -50%)',
    }}

  >
    <img width="150%" height="150%" src={memoji} alt="memoji" />
  </div>
);

const FloatingMemoji = () => {
  const circleRef = useRef(null); // Reference for CircleContainer

  useEffect(() => {
    if (circleRef.current) {
      // GSAP animation for the popup effect
      gsap.to(circleRef.current, {
        opacity: 1, // Make it visible
        scale: 1, // Scale it to full size
        visibility: 'visible', // Ensure it's visible
        duration: 1, // Duration of the animation
      });
    }
  }, []); // Empty dependency array ensures this runs once on mount

  const handleRedirect = () => {
    window.open('https://www.linkedin.com/in/itsrazo', '_blank');
  };

  return (
    <CircleContainer ref={circleRef} onClick={handleRedirect}>
      <Memoji />
    </CircleContainer>
  );
};

export default FloatingMemoji;
