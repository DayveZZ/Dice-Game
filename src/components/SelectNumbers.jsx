import React from "react";

const SelectNumbers = () => {
  return (
    <div className="text-end flex gap-10">
      <h1 className="text-red-600">
        You've not selected a number. Please Select
      </h1>
      <div>
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
  );
};

export default SelectNumbers;
