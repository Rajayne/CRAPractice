import React from "react";
import useLocalStorageState from "../Hooks/useLocalStorage";

const ColorClicker = () => {
  const [color, setColor] = useLocalStorageState("color", "red");
  const changeColor = (e) => {
    setColor(e.target.value);
  };

  return (
    <div>
      <h1 style={{ color }}>Your color is {color}</h1>
      <select value={color} onChange={changeColor}>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="yellow">Yellow</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </select>
    </div>
  );
};

export default ColorClicker;
