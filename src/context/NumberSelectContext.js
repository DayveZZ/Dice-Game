import React, { useState } from "react";

export const NumberSelectContext = React.createContext();

const NumberProvider = (children) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <NumberSelectContext.Provider
      value={{ arrNumber, selectedNumber, setSelectedNumber }}
    >
      {children}
    </NumberSelectContext.Provider>
  );
};

export default NumberProvider;
