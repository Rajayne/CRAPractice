import React from "react";
let count = 0;

const Clicker = () => {
  const counter = () => {
    count += 1;
    console.log(count);
  };
  return <button onClick={counter}>Click Me!</button>;
};

export default Clicker;
