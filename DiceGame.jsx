import React, { useState } from "react";
import { motion } from "framer-motion";
import DiceRoller from "./Spinningdice";

const DiceGame = () => {
  const [score, setScore] = useState(0);
  const [turnScore, setTurnScore] = useState(0);
  const [dice, setDice] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [chances, setChances] = useState(3);
  const targetScore = 50;

  const rollDice = () => {
    if (chances === 0 || gameOver) return;
    
    const rolledNumber = Math.floor(Math.random() * 6) + 1;
    setDice(rolledNumber);
    if (rolledNumber === 1) {
      setTurnScore(0);
      setChances(chances - 1);
      if (chances - 1 === 0) {
        setGameOver(true);
      }
    } else {
      setTurnScore(turnScore + rolledNumber);
    }
  };

  const holdScore = () => {
    if (chances === 0 || gameOver) return;
    
    setScore(score + turnScore);
    setTurnScore(0);
    if (score + turnScore >= targetScore) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setTurnScore(0);
    setDice(1);
    setGameOver(false);
    setChances(3);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="p-6 text-center bg-gray-900 shadow-lg rounded-lg w-80">
        <h1 className="text-3xl font-bold mb-4">Dice Game</h1>
        {gameOver ? (
          <h2 className="text-xl text-red-400">{chances === 0 ? "You lost! 😢" : "You won! 🎉"}</h2>
        ) : (
          <>
            <motion.div
              className="text-6xl mb-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              🎲 {dice}
            </motion.div>
            <p className="text-xl">Current Score: {score}</p>
            <p className="text-lg">Turn Score: {turnScore}</p>
            <p className="text-lg text-yellow-400">Chances Left: {chances}</p>
            <div className="mt-4 space-x-2">
              <button onClick={rollDice} className="bg-blue-500 px-4 py-2 rounded">Roll</button>
              <button onClick={holdScore} className="bg-green-500 px-4 py-2 rounded">Hold</button>
              <button onClick={resetGame} className="bg-red-500 px-4 py-2 rounded">Reset</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DiceGame;

// "Can you provide a React component for a simple dice game where the player rolls a dice to reach a target score of 50,
loses a turn on rolling a 1, has 3 chances before game over, and can hold their turn score?
