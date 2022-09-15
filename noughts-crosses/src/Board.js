import { useEffect, useState } from "react";
import Grid from "./Grid";
import { calculateWinner } from "./WinnerFunc";

function Board() {
  const [boardNumbers, setBoardNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [turn, setTurn] = useState("X");
  const [gameIsWon, setGameIsWon] = useState(false);

  const changeTurn = () => {
    if (turn === "X") {
      setTurn("O");
    } else {
      setTurn("X");
    }
  };

  useEffect(() => {
    if (calculateWinner(boardNumbers)) {
      setGameIsWon(true);
    }
  }, [boardNumbers]);

  return (
    <div className="board">
      <h1>Noughts and Crosses</h1>
      <h2>{turn}</h2>
      <Grid
        boardNumbers={boardNumbers}
        changeTurn={changeTurn}
        turn={turn}
        setBoardNumbers={setBoardNumbers}
      />
      <h3>{boardNumbers}</h3>
      {gameIsWon && <h3>We have a winner</h3>}
    </div>
  );
}

export default Board;
