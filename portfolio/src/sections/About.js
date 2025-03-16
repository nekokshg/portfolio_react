import React from "react";
import Section from "../components/Section";
import "../styles/about.css";
import downloadIcon from "../assets/download.png";
const About = () => {
    return (
        <Section id="about">
        <div className="aboutContainer">
        <h3>About</h3>
        <p>
            <strong>Welcome! I'm Nicole, a passionate software developer dedicated to crafting efficient and reliable solutions.</strong> 
            I thrive on solving complex problems, building scalable software, and continuously refining my skills to stay ahead in the ever-evolving tech world.
        </p>

        <p>
            I'm currently pursuing a <strong>Master’s in Computer Science at Georgia Tech (online)</strong> while leveraging my strong academic foundation 
            from the <strong>University of Nevada - Las Vegas</strong>, where I graduated <strong>Magna Cum Laude</strong> with a 
            <strong> Bachelor’s in Computer Science</strong> and a <strong>minor in Mathematics</strong>.
        </p>

        <p>
            Beyond coding, I have a passion for <strong>game development and digital art</strong>, allowing me to merge creativity 
            with technology in unique and exciting ways.
        </p>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-button">
            View Resume
            <img src={downloadIcon} alt="Download Icon" className="button-icon" />
        </a>
        </div>
        </Section>
    );
};

export default About;