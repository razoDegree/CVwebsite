import React from "react";
import { motion } from "framer-motion";
import Project from "./Project.jsx";
import CVsite from "../assets/projects/CVsite.png";
import austria from "../assets/projects/austria.jpg";
import Library from "../assets/projects/Library.png";
import papers from "../assets/papers.gif";

function ProjectsSection() {
  const textVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="projects-container" data-cursor="-white">
      <div className="projects-title">
        {/* Wrap text with hidden-wrapper */}
        <div className="hidden-wrapper">
          <motion.h2
            className="poppins-light-italic projects-text-top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            Some
          </motion.h2>
        </div>
        <div className="hidden-wrapper">
          <motion.h2
            className="poppins-medium projects-text-bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <img src={papers} alt="papers folding" />
            PROJECTS
          </motion.h2>
        </div>
      </div>

      {/* Project Components */}
      <Project
        img={CVsite}
        alt="CV website photo"
        name="CV Website"
        description="A personal online portfolio showcasing user professional background, skills, and achievements."
        link="https://github.com/razoDegree/CVwebsite"
      />
      <Project
        img={Library}
        alt="Library"
        name="Library Project"
        description="A containerized microservice-based digital library system that manages books, ratings, and loan operations with high availability and load balancing via NGINX."
        link="https://www.github.com/razoDegree/Library-Cloud"
      />
      {/* <Project
        img={austria}
        alt="austria"
        name="Punto Pago"
        description="The First Super-App in Latin America"
        link="https://www.github3.com"
      /> */}
    </div>
  );
}

export default ProjectsSection;
