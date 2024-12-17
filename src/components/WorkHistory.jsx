import React from "react";
import { motion } from "framer-motion";
import InfoCard from "./InfoCard";

const WorkHistory = () => {
  const EconomistKatz = [
    "- Analysis of reports and data, percentages and statistics",
    "- Working with Excel and Oracle systems",
    "- Monitoring data and drawing lessons and conclusions",
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
          <div className="work-history-line"></div>
          <div>
            <motion.div variants={cardVariants}>
              <InfoCard
                name="Courier (part-time)"
                additionalName=", Givat Brenner"
                years="Jul 2021 - Aug 2021"
                content="at Katz Deliveries Ltd."
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Surfing Instructor (part-time)"
                additionalName=", Bat Yam"
                years="Apr 2017 - Aug 2018"
                content="at Get-Surf School Ltd."
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Assistant Economist (part-time)"
                additionalName=", Givat Brenner"
                years="Jul 2021 - Aug 2022"
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
                name="Real Estate Transaction Analyst"
                additionalName=", Rishon LeZion"
                years="Jan 2022 - Jun 2022"
                content="at Lidor Agam Investments Ltd."
              />
            </motion.div>
            <br />

            <motion.div variants={cardVariants}>
              <InfoCard
                name="Raz Katz Investments Ltd. (Founder)"
                additionalName=", Rishon LeZion"
                years="Feb 2022 - Today"
                content="- Real estate investment company"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WorkHistory;
