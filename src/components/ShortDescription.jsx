import React from "react";
import wavingHand from "../assets/wavingHand.gif";

function ShortDescription() {

    const handleRedirect = () => {
        const aboutMe = document.getElementsByClassName('about-me-container-black');
        window.location.href(aboutMe);
    };

    return (
        <div className="shortDes">
            <img src={wavingHand} alt="waving hand" />
            <div className="shortDes-text">
                <p>Hi, I'm Raz, also known as Razo. I'm a third-year Computer Science and Entrepreneurship student with a passion for innovation, problem-solving, and continuous learning. I thrive on challenges and love applying creative solutions at the intersection of technology and business.</p>
                <button onClick={handleRedirect}>Find more about me</button>
            </div>
        </div>
    );
}

export default ShortDescription;