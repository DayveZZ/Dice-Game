import StartGame from "./components/StartGame";
import Gameplay from "./components/Gameplay.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((isGameStarted) => !isGameStarted);
  };
  return (
    <>
      {isGameStarted ? (
        <Gameplay toggle={toggleGamePlay} />
      ) : (
        <StartGame toggle={toggleGamePlay} />
      )}
    </>
  );
}
export default App;
