import React from "react";

function Project(props) {
    const handleRedirect = () => {
        window.open(props.link, '_blank');
    };

    return (
        <div className="project-container">
            <div className="project-card" data-cursor-text="See Github" data-cursor-icon="arrow-left" data-cursor="-black" >
                <img src={props.img} alt={props.alt} onClick={handleRedirect}/>
            </div>
            <div className="project-footer">{props.name} - <span className="highlight">{props.description}</span></div>
        </div>
    );
};

export default Project;

