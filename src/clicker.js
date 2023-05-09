import React, { useState } from "react";

const Clicker = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count is: {count} </h1>
      <button onClick={() => setCount(count + 1)}>Add!</button>
      <button onClick={() => setCount(count - 1)}>Subtract!</button>
    </>
  );
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
