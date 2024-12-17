import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import memoji from "../assets/memoji.gif";

// Styled component for the CircleContainer with responsive styles
const CircleContainer = styled(motion.div)` /* Use motion.div for animations */
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

  /* Responsive design for smaller screens */
  @media screen and (max-width: 768px) {
    width: 12vw;
    height: 12vw;
    bottom: 4vh;
    right: 4vw;
  }

  @media screen and (max-width: 480px) {
    width: 15vw;
    height: 15vw;
    bottom: 2vh;
    right: 3vw;
  }
`;

// Memoji component to display the animated gif
const Memoji = () => (
  <div
    style={{
      position: "absolute",
      top: "51%",
      left: "35%",
      transform: "translate(-50%, -50%)",
    }}
  >
    <img width="150%" height="150%" src={memoji} alt="memoji" />
  </div>
);

const FloatingMemoji = () => {
  // Function to handle redirect to LinkedIn
  const handleRedirect = () => {
    window.open("https://www.linkedin.com/in/itsrazo", "_blank");
  };

  return (
    // Animate CircleContainer using Framer Motion
    <CircleContainer
      initial={{ opacity: 0, scale: 0, visibility: "hidden" }} // Initial state
      animate={{ opacity: 1, scale: 1, visibility: "visible" }} // Animation target
      transition={{ duration: 2, ease: "easeOut" }} // Animation settings
      className="magnetic" // Existing class
      onClick={handleRedirect} // Click handler for redirection
    >
      <Memoji />
    </CircleContainer>
  );
};

export default FloatingMemoji;
