import React, { useRef } from "react";

const Focuser = () => {
  const secondInput = useRef();
  const moveFocus = () => {
    secondInput.current.focus();
  };

  return (
    <>
      <h3>Focus Starts Here</h3>
      <input type="text" autoFocus />
      <button onClick={moveFocus}>Focus the text input</button>
      <h3>Then Move Here</h3>
      <input type="text" ref={secondInput}></input>
    </>
  );
};

export default Focuser;
