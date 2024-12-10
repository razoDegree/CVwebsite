import React from "react";
import Strip from "./Strip";

function MakeContact() {
    return (

        <div className="contact-container" data-cursor="-white" >
            <div className="contact-title">
                <h2 className="poppins-light-italic contact-text-top">Find More</h2>
                <h2 className="poppins-medium contact-text-bottom">& Let's Talk</h2>
            </div>
            <div className="contact-paragraph">
                <Strip socialMedia="GitHub" link="https://www.github.com" />
                <Strip socialMedia="Mail" link="https://www.gmail.com" />
                <Strip socialMedia="Linkedin" link="https://www.linkedin.com/in/itsrazo" />
            </div>
        </div>
    );
}

export default MakeContact;