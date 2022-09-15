import Square from "./Square";

function Grid({ boardNumbers, setBoardNumbers, changeTurn, turn }) {
  return (
    <div className="grid">
      <div className="grid--firstrow">
        <Square
          squareNumber={boardNumbers[0]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
        <Square
          squareNumber={boardNumbers[1]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
        <Square
          squareNumber={boardNumbers[2]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
      </div>
      <div className="grid--secondrow">
        <Square
          squareNumber={boardNumbers[3]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
        <Square
          squareNumber={boardNumbers[4]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
        <Square
          squareNumber={boardNumbers[5]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
      </div>
      <div className="grid--thirdrow">
        <Square
          squareNumber={boardNumbers[6]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
        <Square
          squareNumber={boardNumbers[7]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
        <Square
          squareNumber={boardNumbers[8]}
          boardNumbers={boardNumbers}
          setBoardNumbers={setBoardNumbers}
          turn={turn}
          changeTurn={changeTurn}
        />
      </div>
    </div>
  );
}

export default Grid;
