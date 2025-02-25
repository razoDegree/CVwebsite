import React from "react";
import { motion } from "framer-motion";
import gifCoding from "../assets/gifCoding.gif";

function Video() {
    return (
        <div className="gif-wrapper">
            <div className="gif-container">
                {/* White box animation */}
                <motion.div
                    className="cover-box"
                    initial={{ top: "0%" }} // Start fully covering the gif
                    animate={{ top: "-100%" }} // Move up to reveal the gif
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Static gif */}
                <img className="static-gif" src={gifCoding} alt="Animated Coding GIF" />
            </div>
        </div>
    );
}

export default Video; 