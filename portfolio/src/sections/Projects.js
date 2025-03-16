import React from "react";
import Section from "../components/Section";
import "../styles/projects.css";

const projects = [
    {
        title: "Portfolio Website",
        link: "https://yourportfolio.com",
        description: "A personal portfolio to showcase my work and skills.",
        techStack: ["React", "CSS", "Framer Motion"],
        image: "/images/portfolio.png",
        date: "July - Dec 2024"
    },
    {
        title: "Task Manager App",
        link: "https://github.com/yourrepo",
        description: "A simple task manager with drag-and-drop features.",
        techStack: ["React", "Node.js", "MongoDB"],
        image: "/images/task-manager.png",
        date: "Jan - June 2024"
    }
];

const Projects = () => {
    return (
        <Section id="projects">
            <h3>Projects</h3>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-wrapper">
                        <div className="timeline-date">{project.date}</div> {/* Date Positioned on Timeline */}
                        <div className="project-card">
                            <div className="project-info">
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <h4>{project.title}</h4>
                                </a>
                                <p>{project.description}</p>

                                {/* ✅ Updated Tech Stack Rendering as Bubbles */}
                                <div className="tech-stack">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="tech-bubble">{tech}</span>
                                    ))}
                                </div>
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

