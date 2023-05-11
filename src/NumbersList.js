import React, { useState } from "react";
import NumberButton from "./NumberButton";

const NumbersList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6]);
  const remove = (num) => {
    setNumbers(numbers.filter((n) => n !== num));
    console.log(`Removing: ${num}`);
  };
  return (
    <ul>
      {numbers.map((n) => (
        <NumberButton num={n} remove={() => remove(n)} />
      ))}
    </ul>
  );
};

export default NumbersList;
