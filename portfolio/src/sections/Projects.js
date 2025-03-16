import React from "react";
import Section from "../components/Section";
import "../styles/projects.css";

const projects = [
    {
        title: "Portfolio Website",
        link: "https://yourportfolio.com",
        description: "A personal portfolio to showcase my work and skills.",
        techStack: ["React", "CSS", "Framer Motion"],
        image: "/images/portfolio.png"
    },
    {
        title: "Task Manager App",
        link: "https://github.com/yourrepo",
        description: "A simple task manager with drag-and-drop features.",
        techStack: ["React", "Node.js", "MongoDB"],
        image: "/images/task-manager.png"
    }
];

const Projects = () => {
    return (
        <Section id="projects">
            <h3>Projects</h3>
            <div className="projects-container">
                <div className="timeline-line"></div> {/* Vertical Timeline */}
                {projects.map((project, index) => (
                    <div key={index} className="project-wrapper">
                        <div className="timeline-dot"></div> {/* Dot on Top of Line */}
                        <div className="project-card">
                            <div className="project-info">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <h4>{project.title}</h4>
                                </a>
                                <p>{project.description}</p>
                                <p className="tech-stack">{project.techStack.join(" • ")}</p>
                            </div>
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
