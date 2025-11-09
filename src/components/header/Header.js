import React, {useContext} from "react";
// import Headroom from "react-headroom"; // REMOVED
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  educationInfo,
  bigProjects,
  achievementSection,
  resumeSection // Keeping this import for its 'display' check, even if we don't display a component
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewSkills = skillsSection.display;
  const viewEducation = educationInfo.display;
  const viewProjects = bigProjects.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display; // Use this to conditionally show the Resume link

  return (
    <div className="header-fixed-wrapper">
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          
          {/* 1. ABOUT ME (Links to #skills) */}
          {viewEducation && viewSkills && (
            <li>
              <a href="#about-me">About Me</a> 
            </li>
          )}

          {/* 2. PROJECTS */}
          {viewProjects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}
          {/* 3. ACCOMPLISHMENTS */}
          {viewAchievement && (
            <li>
              <a href="#accomplishments">Accomplishments</a>
            </li>
          )}
          
          {/* 4. RESUME LINK (Direct link to the drive file) */}
          {viewResume && (
            <li>
              <a 
                href="https://drive.google.com/file/d/1byYp6K_EVvibP4CXBFquKSqBAIyZt3eK/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer" 
                download="Pinak_Dange_Resume.pdf"
              >
                Resume
              </a>
            </li>
          )}

          {/* 5. CONTACT ME */}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* Dark Mode Toggle */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;