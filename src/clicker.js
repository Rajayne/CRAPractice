import React from "react";
let count = 0;

const Clicker = () => {
  const counter = () => {
    count += 1;
    console.log(count);
  };
  return <button onClick={counter}>Click Me!</button>;
};

const ButtonGroup = () => {
  const printColor = (color) => {
    console.log(`You clicked: ${color.toUpperCase()}`);
  };
  return (
    <div>
      <button onClick={() => printColor("Red")}>Red</button>
      <button onClick={() => printColor("Yellow")}>Yellow</button>
      <button onClick={() => printColor("Blue")}>Blue</button>
    </div>
  );
};

export { Clicker, ButtonGroup };
