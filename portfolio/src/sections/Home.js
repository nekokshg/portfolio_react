import React from "react";
import Section from "../components/Section";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import emailIcon from "../assets/email.png";

const Home = () => {
    return (
        <Section id="home">
            <h1>Nicole Kaneshige</h1>
            <h3>Software Engineer</h3>
            <p>Passionate about software engineering, game <br></br> development, and digital art.</p>
            <div className="nav-buttons">
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="nav-button">
                    <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="nav-button">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="mailto:nicolekaneshige@gmail.com" className="nav-button">
                    <img src={emailIcon} alt="emailImage" className="social-icon" />
                </a>
            </div>
        </Section>
    )
}

export default Home;