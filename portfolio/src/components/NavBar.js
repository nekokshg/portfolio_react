import React, { useState, useEffect } from "react";
import "../styles/navbar.css";
import NavLinkWithCheckbox from "./NavLinkWithCheckbox.js";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("about");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const handleScroll = () => {
            let currentSection = "about"; // Default section
            const viewportHeight = window.innerHeight;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const sectionTop = rect.top;

                // If the section is 10vh from the top, update active section
                if (sectionTop <= viewportHeight * 0.1 && rect.bottom > viewportHeight * 0.1) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        // Call handleScroll on load to set the correct initial section
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <h1>Nicole Kaneshige</h1>
                <h3>Software Engineer</h3>
            </div>
            
            {/* ✅ Stacked Navigation Links */}
            <div className="nav-links">
                <NavLinkWithCheckbox sectionId="about" sectionName="About" activeSection={activeSection} />
                <NavLinkWithCheckbox sectionId="skills" sectionName="Skills" activeSection={activeSection} />
                <NavLinkWithCheckbox sectionId="projects" sectionName="Projects" activeSection={activeSection} />
            </div>

            {/* ✅ Social Media Buttons at the Bottom */}
            <div className="nav-buttons">
                <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" className="nav-button">
                    <img src={githubIcon} alt="GitHub" className="social-icon" />
                </a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer" className="nav-button">
                    <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;

