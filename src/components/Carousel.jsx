import React from "react";
import { motion } from "framer-motion";
import Pic from "./Pic";

import c4 from "../assets/curosel/c--4.svg";
import c1 from "../assets/curosel/c-1.svg";
import css from "../assets/curosel/css-3.svg";
import git from "../assets/curosel/git-icon.svg";
import java from "../assets/curosel/java-icon.svg";
import javascript from "../assets/curosel/logo-javascript.svg";
import nodejs from "../assets/curosel/nodejs-1.svg";
import python from "../assets/curosel/python-icon.svg";
import react from "../assets/curosel/react-2.svg";

// Array of images
const languegs = [
  c4,
  c1,
  css,
  git,
  java,
  javascript,
  nodejs,
  python,
  react,
];

function Carousel() {
  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        initial={{ x: 0 }} // Start position
        animate={{ x: "-100%" }} // Move the container to the left
        transition={{
          ease: "linear", // Smooth and continuous motion
          duration: 15, // Adjust speed (lower = faster)
          repeat: Infinity, // Loop infinitely
        }}
      >
        {/* Duplicate images for a seamless loop */}
        {[...languegs, ...languegs, ...languegs].map((item, idx) => (
          <div className="carousel-item" key={idx}>
            <Pic item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
