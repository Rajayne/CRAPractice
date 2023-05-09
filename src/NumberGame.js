import React, { useState } from "react";
import "./NumberGame.css";

const NumberGame = (props) => {
  const randomNum = () => Math.floor(Math.random() * 10) + 1;
  const [guess, setGuess] = useState(randomNum());
  const [target, setTarget] = useState(randomNum());
  const isWinner = target === guess;
  return (
    <div>
      <h1 style={{ color: target === guess ? "green" : "red" }}>
        Target Number: {target}
      </h1>
      <h1 className={isWinner ? "winner" : "loser"}>Your Guess: {guess}</h1>
      {!isWinner && (
        <button onClick={() => setGuess(randomNum())}>Generate!</button>
      )}
    </div>
  );
};

export default NumberGame;
