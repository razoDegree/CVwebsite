import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import wavingHand from "../assets/wavingHand.gif";
import { ScrollbarContext } from "./SmoothScroll";

function ShortDescription() {
  const scrollbarRef = useContext(ScrollbarContext);

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const scrollToWorkSection = () => {
    const workSection = document.getElementById("work");
    if (scrollbarRef.current && workSection) {
      const targetPosition = workSection.offsetTop;
      scrollbarRef.current.scrollTo(0, targetPosition, 1000);
    }
  };

  return (
    <div className="shortDes" ref={ref}>
      <motion.img
        src={wavingHand}
        alt="waving hand"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <div className="shortDes-text">
        <motion.p
          initial={{ opacity: 0, y: "50px" }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Hi, I'm Raz, also known as Razo. I'm a third-year Computer Science and
          Entrepreneurship student with a passion for innovation, problem-solving,
          and continuous learning.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: "50px" }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          onClick={scrollToWorkSection}
        >
          Find more about me
        </motion.button>
      </div>
    </div>
  );
}

export default ShortDescription;
