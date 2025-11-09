import React, {useContext, useEffect} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import { useInView } from 'react-intersection-observer'; // <-- NEW IMPORT

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  
  // 1. Configure the Intersection Observer for this component
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the section is visible
  });

  // 2. Update the URL hash when the section becomes visible
  useEffect(() => {
    if (inView) {
      // Use replaceState to change the URL to #contact without jumping the page
      window.history.replaceState(null, null, '#contact');
    }
  }, [inView]); // Dependency on 'inView' ensures it runs only when visibility changes


  return (
    <Fade bottom duration={1000} distance="20px">
      {/* 3. Attach the observer 'ref' to the main container, keeping the ID #contact */}
      <div ref={ref} className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <>
                  <a
                    className="contact-detail"
                    href={"tel:" + contactInfo.number}
                  >
                    {contactInfo.number}
                  </a>
                  <br />
                  <br />
                </>
              )}
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            {/* Image/Animation wrapped in a mailto link */}
            <a
              className="contact-image-link"
              href={"mailto:" + contactInfo.email_address}
            >
              {illustration.animated ? (
                <DisplayLottie animationData={email} />
              ) : (
                <img
                  alt="Man working"
                  src={require("../../assets/images/contactMailDark.svg")}
                ></img>
              )}
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
}