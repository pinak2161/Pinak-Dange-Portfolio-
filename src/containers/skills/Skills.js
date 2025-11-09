import React, {useContext, useEffect} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { useInView } from 'react-intersection-observer'; // <-- NEW IMPORT

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  
  // 1. Configure the Intersection Observer for this component
  const { ref, inView } = useInView({
    threshold: 0.1, // Only 10% visibility is needed to trigger
  });

  useEffect(() => {
    // 2. IMPORTANT: Only update the hash if we are NOT at the absolute top (scrollY > 10)
    // This gives the Go to Top button time to clear the URL hash.
    if (inView && window.scrollY > 10) { 
      window.history.replaceState(null, null, '#about-me');
    }
    // Also, clear the hash if the Scrollspy is at the very top (Page Load/Go to Top)
    if (window.scrollY === 0) {
      window.history.replaceState(null, null, '/'); 
    }
  }, [inView]); // Dependency on 'inView' ensures it runs only when visibility changes


  if (!skillsSection.display) {
    return null;
  }
  return (
    // 3. Attach the observer 'ref' to the main container, and use the ID #about-me
    <div ref={ref} className={isDark ? "dark-mode main" : "main"} id="about-me">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Man Working"
                src={require("../../assets/images/developerActivity.svg")}
              ></img>
            )}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}