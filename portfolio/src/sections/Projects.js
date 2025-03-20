import React, { useState } from "react";
import Section from "../components/Section";
import "../styles/projects.css";
import projects from "../data/projects.json";

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = projects.filter(project => 
        selectedCategory === "All" || project.category === selectedCategory
    );

    return (
        <Section id="projects">
            <div className="projects-header">
                <h3>Projects</h3>

                <div className="sort-buttons">
                    {["All", "Full-Stack", "Game Development"].map(category => (
                        <button 
                            key={category} 
                            className={`sort-button ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            <div className="projects-container">
                {filteredProjects.map((project, index) => (
                    <div key={index} className="project-wrapper">
                        <div className="project-card">
                            <div className="project-info">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <h4>{project.title}</h4>
                                </a>
                                <p>{project.description}</p>

                                <div className="tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="tech-bubble">{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="project-image-container">
                                <img src={`${process.env.PUBLIC_URL}/images/${project.image}`} alt={project.title} className="project-image" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;


