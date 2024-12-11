import React from "react";
import { motion } from "framer-motion";
import codingVideo from "../assets/coding-video.mp4";

function Video() {
    return (
        <div className="video-wrapper">
            <div className="video-container">
                {/* White box animation */}
                <motion.div
                    className="cover-box"
                    initial={{ top: "0%" }} // Start fully covering the video
                    animate={{ top: "-100%" }} // Move up to reveal the video
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
                {/* Static video */}
                <video className="static-video" autoPlay muted loop>
                    <source src={codingVideo} type="video/mp4" />
                </video>
            </div>
        </div>
    );
}

export default Video;