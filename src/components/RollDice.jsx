// import { useState } from "react";
// import clickSound from "../assets/click_1.wav";

const RollDice = ({ currentDice, roleDices }) => {
  return (
    <div className="flex flex-col items-center justify-center h-3/5">
      <button onClick={roleDices}>
        <img src={`src/assets/dice_${currentDice}.png`} />
      </button>
      <h1 className="text-md">Click on the Dice to roll</h1>

      <div></div>
    </div>
  );
};

export default RollDice;
