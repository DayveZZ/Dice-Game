import { useState } from "react";
import Rules from "./Rules";

function Gameplay() {
  const [show, setShow] = useState(false);
  return (
    <div className=" h-screen bg-gray-100 p-10">
      <div className="flex items-center justify-between h-1/5">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-5xl text-center mb-5">0</h1>
          <span>Your Score</span>
        </div>

        <div className="text-end">
          <ul className="selectNumber flex items-center justify-center space-x-4 mb-5">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
          </ul>
          <h1 className="font-semibold">Select Number</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-3/5">
        <button>
          <img src="src\assets\dice_1.png" />
        </button>
        <h1 className="text-md">Click on the Dice to roll</h1>
        <button className="w-50 border-2 border-black px-3 py-2 rounded-md cursor-pointer hover:bg-black hover:text-white transition duration-400 mt-5">
          Reset Score
        </button>
        <div></div>
      </div>

      <div className="flex justify-between">
        <button
          className="w-50 h-12 border-2 border-black px-3 py-2 rounded-md cursor-pointer bg-black text-white hover:bg-white hover:text-black transition duration-400"
          onClick={() => setShow(!show)}
        >
          Show Rules
        </button>
        {show && <Rules />}
      </div>
    </div>
  );
}
export default Gameplay;

{
  /* <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p> */
}
