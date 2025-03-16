import React from "react";
import Section from "../components/Section";
import "../styles/skills.css";

const Skills = () => {
    const skills = {
        "Programming Languages": ["C++", "C", "C#", "Python", "JavaScript", "HTML", "CSS", "SQL"],
        "Frameworks & Tools": ["Git", "GitHub", "React", "Node.js", "Express", "Visual Studio Code", "Visual Studio", "Unity"],
        "Databases": ["MariaDB", "MongoDB"],
        "Operating Systems": ["Linux", "Windows", "MacOS"]
    };

    return (
        <Section id="skills">
            <h3>Technical Skills</h3>
            <div className="skills-container">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="skill-category">
                        <h4>{category}</h4>
                        <div className="skill-badges">
                            {skillList.map((skill, index) => (
                                <span key={index} className="skill-badge">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;

