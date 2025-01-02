import React from "react";
import { motion } from "framer-motion";
import Pic from "./Pic";

// Array of images
const languegs = [
  "../assets/curosel/c--4.svg",
  "../assets/curosel/c-1.svg",
  "../assets/curosel/css-3.svg",
  "../assets/curosel/git-icon.svg",
  "../assets/curosel/java-icon.svg",
  "../assets/curosel/logo-javascript.svg",
  "../assets/curosel/nodejs-1.svg",
  "../assets/curosel/python-icon.svg",
  "../assets/curosel/react-2.svg",
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
