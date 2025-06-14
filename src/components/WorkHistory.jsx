import React from "react";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";

const WorkHistory = () => {
  const EconomistKatz = [
    "- Analysis of reports and data, percentages and statistics",
    "- Working with Excel and Oracle systems",
    "- Monitoring data and drawing lessons and conclusions",
  ];

  const SoftSkills = [
    "- Leadership & Team Management",
    "- Project Management",
    "- Teamwork",
    "- Training and Instruction",
    "- Analytical Thinking",
    "- Responsibility and Initiative",
    "- Multitasking and Working Under Pressure",
    "- Interpersonal Communication",
    "- Ambition and Persistence",
    "- Organize and Order"
  ]

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
    <div className="work-history-container-black" id="work">
      <div className="work-history-container">
        {/* Title Section with Wall Effect */}
        <div className="work-history-title">
          <div className="hidden-wrapper">
            <motion.h2
              className="poppins-light-italic work-history-text-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              Work
            </motion.h2>
          </div>
          <div className="hidden-wrapper">
            <motion.h2
              className="poppins-medium work-history-text-bottom"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={titleVariants}
            >
              Experience
            </motion.h2>
          </div>
        </div>

        {/* Work History Section with Staggered Animation */}
        <motion.div
          className="work-history-section poppins-extralight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardContainerVariants}
        >
          <motion.div variants={cardVariants}>
            <InfoCard
              name="Fullstack Engineer, Convrt Analytics Ltd. (Startup)"
              additionalName=", Tel Aviv"
              years="Apr 2025 - Today, Under the CO-OP program at Reichman University, receiving academic credit in lieu of financial compensation"
              content="Participated in a hands-on development project, contributing to both frontend and backend components within a collaborative team setting."
            />
          </motion.div>
          <br />

          <motion.div variants={cardVariants}>
            <InfoCard
              name="Project Manager, Lidor Agam Investments Ltd."
              additionalName=", Rishon LeZion"
              years="Jan 2025 - Today"
              content="Planning and execution of PE Fund, coordinating between Investors and companies to ensure profit delivery."
            />
          </motion.div>
          <br />

          <motion.div variants={cardVariants}>
            <InfoCard
              name="Founder, Raz Katz Investments Ltd."
              additionalName=", Rishon LeZion"
              years="Feb 2022 - Today"
              content="Founded and manage a private real estate investment company focused on identifying, analyzing, and executing profitable property deals."
            />
          </motion.div>
          <br />

          <motion.div variants={cardVariants}>
            <InfoCard
              name="Real Estate Investments Analyst (part-time), Lidor Agam Ltd."
              additionalName=", Rishon LeZion"
              years="Jan 2022 - May 2024"
              content="Supported the evaluation and execution of real estate transactions through market analysis and due diligence."
            />
          </motion.div>
          <br />

          <motion.div variants={cardVariants}>
            <InfoCard
              name="Community Manager (Founder)"
              additionalName=", Rishon LeZion"
              years="Dec 2021 - Nov 2022"
              content="of Crypto & Stocks investors, at nftspace IL"
            />
          </motion.div>
          <br />

          <div className="work-history-line"></div>
          <div>
            <motion.div variants={cardVariants}>
              <InfoCard
                name="Assistant Economist"
                additionalName=", Rishon LeZion"
                years="Aug 2021 - Feb 2022"
                content={
                  <div>
                    {EconomistKatz.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                }
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Personal Soft Skills"
                years={
                  <div>
                    {SoftSkills.map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                }
              />
            </motion.div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkHistory;
