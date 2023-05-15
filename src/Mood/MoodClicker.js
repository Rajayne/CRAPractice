import React, { useState } from "react";
import "./MoodClicker.css";
import useToggleState from "../Hooks/useToogleState";

const MoodClicker = () => {
  const [isHappy, toggleIsHappy] = useToggleState(true);
  const [isDarkMode, toggleDarkMode] = useToggleState(false);
  //   const [isHappy, setIsHappy] = useState(true);
  //   const [isDarkMode, setDarkMode] = useState(false);
  //   const toggleMood = () => {
  //     setIsHappy((mood) => !mood);
  //   };
  //   const toggleDarkMode = () => {
  //     setDarkMode((mode) => !mode);
  //   };

  return (
    <div className={isDarkMode ? "Clicker-dark" : "Clicker-light"}>
      <h1>{isHappy ? "😊" : "😔"}</h1>
      <button onClick={toggleIsHappy}>Change Mood</button>
      <button onClick={toggleDarkMode}>Toggle Dark/Light Mode</button>
    </div>
  );
};

export default MoodClicker;
