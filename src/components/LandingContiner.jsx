import React from "react";
import { motion } from "framer-motion";
import codeRun from "../assets/code-run.gif";

const lineVariants = {
    hidden: { opacity: 0, y: "100%" },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.5, duration: 0.8, ease: "easeOut" },
    }),
};

function LandingContainer() {
    const lines = [
        <div>
            I'm just a <span className="poppins-thin-italic">regular</span>
        </div>,
        <div key="guy-who" className="line-with-image">
            <img src={codeRun} alt="code" />
            <span>guy who</span>
        </div>,
        "loves to code",
    ];

    return (
        <div className="landing-container" id="landing">
            <div className="content">
                <h2>
                    {lines.map((line, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={lineVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {line}
                        </motion.div>
                    ))}
                </h2>
            </div>
        </div>
    );
}

export default LandingContainer;
