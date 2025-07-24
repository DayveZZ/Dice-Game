import { useState } from "react";

const SelectNumbers = ({ selectedNumber, setSelectedNumber }) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <div className="text-end flex gap-10">
      <h1 className="text-red-600">
        You've not selected a number. Please Select
      </h1>
      <div>
        <ul className="selectNumber flex items-center justify-center space-x-4 mb-5">
          {arrNumber.map((value, index) => (
            <li
              // isSelected={value === selectedNumber}
              key={index}
              onClick={() => setSelectedNumber(value)}
              className={
                selectedNumber === value
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }
            >
              {value}
            </li>
          ))}
        </ul>
        <h1 className="font-semibold">Select Number</h1>
      </div>
    </div>
  );
};

export default SelectNumbers;
