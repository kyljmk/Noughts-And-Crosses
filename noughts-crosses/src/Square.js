import { useState } from "react";
import "./App.css";

function Square({
  squareNumber,
  boardNumbers,
  setBoardNumbers,
  changeTurn,
  turn,
}) {
  const [mark, setMark] = useState("");

  const handleClick = () => {
    if (mark === "") {
      changeTurn();
      setMark(turn);
      const boardCopy = [...boardNumbers];
      boardCopy[squareNumber] = turn;
      setBoardNumbers(boardCopy);
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      <span>{mark}</span>
    </div>
  );
}

export default Square;
