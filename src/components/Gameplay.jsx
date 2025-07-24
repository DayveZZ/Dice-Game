import { useState } from "react";
import Rules from "./Rules";
import clickSound from "../assets/click_1.wav";
import RollDice from "./RollDice";
import SelectNumbers from "./SelectNumbers";
import Score from "./Score";

const Gameplay = ({ toggle }) => {
  const [selectedNumber, setSelectedNumber] = useState();

  const [show, setShow] = useState(false);
  new Audio(clickSound).play();

  return (
    <div className=" h-screen bg-gray-100 p-10">
      <div className="flex justify-between">
        <Score />

        <SelectNumbers
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>

      <RollDice />

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
