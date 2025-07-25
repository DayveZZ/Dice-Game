import React from "react";

const Score = ({ score }) => {
  return (
    <div className="flex items-center h-1/5 w-fit">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center mb-5">{score}</h1>
        <span>Your Score</span>
      </div>
    </div>
  );
};

export default Score;
