import React from "react";
import { motion } from "framer-motion";

function Project(props) {
  const handleRedirect = () => {
    window.open(props.link, "_blank");
  };

  // Animation variants for fade-in and rise effect
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and below
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="project-container"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the card is in view
    >
      {/* Project Card with cursor properties */}
      <div
        className="project-card"
        data-cursor-text="See Github"
        data-cursor-icon="arrow-left"
        data-cursor="-black"
      >
        <motion.img
          src={props.img}
          alt={props.alt}
          onClick={handleRedirect}
        />
      </div>
      {/* Project Footer */}
      <div className="project-footer">
        {props.name}
        <span className="stack">{props.stack}</span>
        <span className="description">{props.description}</span>
      </div>
    </motion.div>
  );
}

export default Project;
