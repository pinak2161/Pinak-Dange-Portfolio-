import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Education from "./education/Education";
import StartupProject from "./StartupProjects/StartupProject"; // This is for 'Big Projects'
import Achievement from "./achievement/Achievement";

import Footer from "../components/footer/Footer";
import Profile from "./profile/Profile"; 
import ScrollToTopButton from "./topbutton/Top";
import { splashScreen } from "../portfolio";
import { StyleProvider } from "../contexts/StyleContext";
import { useLocalStorage } from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {/* Removed conditional logic and SplashScreen component */}
        <>
          <Header />
          <Greeting />
          <Skills />
          <Education />
          <StartupProject />
          <Achievement />
          <Profile />
          <Footer />
          <ScrollToTopButton />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;