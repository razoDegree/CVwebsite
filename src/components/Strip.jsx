import React, { useState } from "react";

const Strip = ({ socialMedia, link }) => {
    const [hover, setHover] = useState(false);

    const handleRedirect = () => {
        if (link.startsWith("mailto:")) {
            window.location.href = link;
        } else {
            window.open(link, "_blank");
        }
    };

    return (
        <div>
            <div className="line"></div>
            <div
                className={`strip-container ${hover ? "hover" : ""}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleRedirect}
            >
                <a className="strip-content">
                    <span className="social-media-name">{socialMedia}</span>
                    <span className="arrow">↗</span>
                </a>
                {hover && (
                    <div className="moving-text">
                        {[...Array(15)].map((_, i) => (
                            <div key={i} className="scrolling-item">
                                <span className="scrolling-text">{socialMedia}</span>
                                <span className="arrow">↗</span>
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
