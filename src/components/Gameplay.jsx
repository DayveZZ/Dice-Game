function Gameplay() {
  return (
    <div className="flex items-center justify-evenly h-screen bg-gray-100">
      <img src="src\assets\dices.png" className="w-2/5" />

      <div className="flex flex-col items-end justify-between h-50">
        <h1 className="text-9xl">DICE GAME</h1>
        <button className="bg-black text-white text-2xl px-6 py-3 rounded-md cursor-pointer hover:bg-white hover:text-black hover:shadow-md transition duration-400">
          Play Now
        </button>
      </div>
    </div>
  );
}
export default Gameplay;
