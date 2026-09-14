import React from "react";
import NavBar from "../website_components/navbar"
import "../styles/ProjectHub.css"

function Projects() {
        return(
        <div>
        <NavBar/>
        <div className="projects-body">
        <div className="projects-list">
                <span className="curved-underline"><h1 className="title-projects">PROJECTS</h1></span>
                <div className="project-container">
                        <div className="project-index">Project 1:</div>
                        <div className="project-name">Malicious x64 LKM Rootkit</div>
                        <div>going to add soon...</div>
                </div>
        </div>
        </div>
        </div>
        )
} export default Projects