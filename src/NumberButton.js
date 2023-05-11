import React, { useState } from "react";

const NumberButton = ({ num, remove }) => {
  // If parent only passes remove as prop, not () => remove()
  // Use handleRemove for onClick
  //   const handleRemove = () => {
  //     remove(num);
  //   };
  return (
    <li>
      <button onClick={remove}>{num}</button>
    </li>
  );
};

export default NumberButton;
