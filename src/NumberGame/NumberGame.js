import React, { useState } from "react";
import "./NumberGame.css";

const NumberGame = (props) => {
  const randomNum = () => Math.floor(Math.random() * 10) + 1;
  const restart = () => {
    setTarget(randomNum());
    setGuess(0);
  };
  const [guess, setGuess] = useState(0);
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
      <button onClick={restart}>Restart!</button>
    </div>
  );
};

export default NumberGame;
