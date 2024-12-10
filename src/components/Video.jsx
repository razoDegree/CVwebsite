import React from "react";
import codingVideo from "../assets/coding-video.mp4";

function Video() {
    return (
        <div className="video-container">
            <video autoPlay muted loop>
                <source src={codingVideo} type="video/mp4"></source>
            </video>
        </div>
    );
}

export default Video;