import React, {useContext, useEffect} from "react"; // Added useEffect
import "./Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {achievementSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { useInView } from 'react-intersection-observer'; // <-- NEW IMPORT

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  
  // 1. Configure the Intersection Observer for this component
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  // 2. Update the URL hash when the section becomes visible
  useEffect(() => {
    if (inView) {
      // Use replaceState to change the URL to #achievements without jumping the page
      window.history.replaceState(null, null, '#achievements');
    }
  }, [inView]); // Dependency on 'inView' ensures it runs only when visibility changes
  
  
  if (!achievementSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      {/* 3. Attach the observer 'ref' to the main container */}
      <div ref={ref} className="main" id="accomplishments">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {achievementSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {achievementSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {achievementSection.achievementsCards.map((card, i) => {
              return (
                <AchievementCard
                  key={i}
                  isDark={isDark}
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    imageAlt: card.imageAlt,
                    footer: card.footerLink
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}