import { useState } from "react";
import Rules from "./Rules";
import clickSound from "../assets/click_1.wav";

const Gameplay = ({ toggle }) => {
  const [show, setShow] = useState(false);
  new Audio(clickSound).play();

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
        <button
          className="w-50 h-12 bg-white px-3 py-2 shadow-lg rounded-md cursor-pointer hover:bg-black hover:text-white transition duration-400 mt-5"
          onClick={() => new Audio(clickSound).play()}
        >
          Reset Score
        </button>
        <div></div>
      </div>
      <div className="flex">
        <button
          className="w-50 h-12 shadow-lg px-3 py-2 rounded-md cursor-pointer bg-black text-white hover:bg-white hover:border-white hover:text-black transition duration-400"
          onClick={() => {
            setShow(!show);
            new Audio(clickSound).play();
          }}
        >
          Show Rules
        </button>
        {show && <Rules />}
      </div>
      <button
        className="absolute bottom-40 right-10 w-50 h-12 shadow-lg px-3 py-2 rounded-md cursor-pointer bg-black text-white hover:bg-white hover:border-white hover:text-black transition duration-400 mt-5"
        onClick={toggle}
      >
        Home
      </button>
    </div>
  );
};
export default Gameplay;
