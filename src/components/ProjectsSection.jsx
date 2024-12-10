import React from "react";
import Project from "./Project.jsx";
import austria from "../assets/projects/austria.jpg"
import uk from "../assets/projects/uk.jpg"
import papers from "../assets/papers.gif"

function ProjectsSection() {
    return (
        <div className="projects-container" data-cursor="-white">
            <div className="projects-title">
                <h2 className="poppins-light-italic projects-text-top">Some</h2>
                <h2 className="poppins-medium projects-text-bottom"><img src={papers} alt="papers folding" />PROJECTS</h2>
            </div>
            <Project img={austria} alt='austria' name='Punto Pago' description='The First Super-App in Latin America' link="https://www.github1.com" />
            <Project img={uk} alt='uk' name='Riyadh' description='Official website of Riyadh, Saudi' link="https://www.github2.com" />
            <Project img={austria} alt='austria' name='Punto Pago' description='The First Super-App in Latin America' link="https://www.github3.com" />
        </div >
    );
}

export default ProjectsSection;