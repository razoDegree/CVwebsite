import React, { useState } from "react";

const Strip = ({ socialMedia, link }) => {
    const [hover, setHover] = useState(false);

    const handleRedirect = () => {
        window.open(link, "_blank");
    }

    return (
        <div>
            <div className="line"></div>
            <div
                className={`strip-container ${hover ? "hover" : ""}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleRedirect}
            >

                <a target="_blank" rel="noopener noreferrer" className="strip-content">
                    <span className="social-media-name">{socialMedia}</span>
                    <span className="arrow">&#8599;</span>
                </a>
                {hover && (
                    <div className="moving-text">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="scrolling-item">
                                <span className="scrolling-text">{socialMedia}</span>
                                <span className="arrow">&#8599;</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="line"></div>
        </div>
    );
};

export default Strip;