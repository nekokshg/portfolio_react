import React from "react";
import Section from "../components/Section";
import experience from "../data/experience.json";
import "../styles/experience.css";

const Experience = () => {
    return (
        <Section id="experience">
            <h3>Experience</h3>
            <div className="experience-container">
                {
                    experience.map((experience, index) => (
                        <div key={index} className="experience-wrapper">
                            <div className="timeline-date">{experience.date}</div>
                            <div className="experience-card">
                                <div className="experience-info">
                                    <a href={experience.link} target="_blank" rel="noopener noreferrer">
                                        <h4>{experience.title}</h4>
                                    </a>
                                    <p>{experience.description}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </Section>
    )
};

export default Experience;