import React, { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    console.log("Clean Up", id);
    return () => clearInterval(id);
  }, []);

  return <h1>{seconds}</h1>;
};

export default Timer;
