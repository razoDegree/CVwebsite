import React from "react";
import { motion } from "framer-motion";
import Pic from "./Pic";

// Array of images
const languegs = [
  "../src/assets/curosel/c--4.svg",
  "../src/assets/curosel/c-1.svg",
  "../src/assets/curosel/css-3.svg",
  "../src/assets/curosel/git-icon.svg",
  "../src/assets/curosel/java-icon.svg",
  "../src/assets/curosel/logo-javascript.svg",
  "../src/assets/curosel/nodejs-1.svg",
  "../src/assets/curosel/python-icon.svg",
  "../src/assets/curosel/react-2.svg",
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
