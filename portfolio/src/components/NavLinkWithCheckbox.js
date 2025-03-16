import React from "react";
import { Link, scroller } from "react-scroll";

const NavLinkWithCheckbox = ({ sectionId, sectionName, activeSection }) => {
    const isActive = activeSection === sectionId; // Check if this section is active

    const handleCheckboxClick = () => {
        scroller.scrollTo(sectionId, {
            smooth: true,
            duration: 300,
            offset: -50, // Adjust for better positioning
        });
    };

    return (
        <label className="nav-item">
            <input
                type="checkbox"
                checked={isActive} // Checkbox is checked when section is active
                readOnly
                onClick={handleCheckboxClick} // Scroll when checkbox is clicked
            />
            <Link
                to={sectionId}
                smooth={true}
                duration={300}
                className={`nav-link ${isActive ? "active" : ""}`} // Ensures strikethrough when active
            >
                {sectionName}
            </Link>
        </label>
    );
};

export default NavLinkWithCheckbox;
