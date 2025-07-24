import { useState } from "react";
import clickSound from "../assets/click_1.wav";

const RollDice = () => {
  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomDice = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const roleDices = () => {
    const randomNumber = generateRandomDice(1, 7);
    setCurrentDice(() => randomNumber);
  };
  console.log(currentDice);
  return (
    <div className="flex flex-col items-center justify-center h-3/5">
      <button onClick={roleDices}>
        <img src={`src/assets/dice_${currentDice}.png`} />
      </button>
      <h1 className="text-md">Click on the Dice to roll</h1>
      <button
        className="w-50 h-12 bg-white px-3 py-2 shadow-lg rounded-md cursor-pointer hover:bg-black hover:text-white transition duration-400 mt-5"
        onClick={() => new Audio(clickSound).play()}
      >
        Reset Score
      </button>
      <div></div>
    </div>
  );
};

export default RollDice;
