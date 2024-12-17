import React from "react";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";

function Education() {
  const nachshonContent = [
    "- Math (5 Units): 91",
    "- English (5 Units): 91",
    "- Computer Science (5 Units): 95",
    "- Physics (5 Units): 87",
  ];

  const titleVariants = {
    hidden: { y: "100%" }, // Start from behind the "wall"
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const cardContainerVariants = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: 0.3, // Time delay between each card's animation
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Cards start hidden and move up
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="education-container-black" data-cursor="-white">
      <div className="education-container">
        {/* Title Section with Wall Effect */}
        <div className="education-title">
          <div className="hidden-wrapper">
            <motion.h2
              className="poppins-light-italic education-text-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              Certificates
            </motion.h2>
          </div>
          <div className="hidden-wrapper">
            <motion.h2
              className="poppins-medium education-text-bottom"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              & Education
            </motion.h2>
          </div>
        </div>

        {/* Education Section with Staggered Animation */}
        <motion.div
          className="education-section poppins-extralight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardContainerVariants}
        >
          <div className="education-line"></div>
          <div>
            <motion.div variants={cardVariants}>
              <InfoCard
                name="Nachshon Program for Excellence"
                additionalName=" (12 full years of study)"
                years="2007 - 2018"
                content={
                  <div>
                    {nachshonContent.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                }
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Excel Beginner + Advanced Course"
                additionalName=", CampusIL"
                years="Jul 2021 - Aug 2021"
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Real Estate Club"
                additionalName=", Reichman University"
                years="Nov 2022 - Mar 2023"
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Proptech Club"
                additionalName=", Reichman University"
                years="Apr 2022 - Jul 2023"
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Double Major in Computer Science and Entrepreneurship"
                additionalName=", Reichman University"
                years="Nov 2022 - Present (3rd year)"
                content="GPA: 91"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
