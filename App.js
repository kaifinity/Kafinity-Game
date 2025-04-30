import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] || checkWinner()) return;
    const newBoard = board.slice();
    newBoard[index] = isXTurn ? "X" : "O";
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = checkWinner();

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((val, i) => (
          <div key={i} className="square" onClick={() => handleClick(i)}>
            {val}
          </div>
        ))}
      </div>
      <h2>{winner ? `Winner: ${winner}` : `Turn: ${isXTurn ? "X" : "O"}`}</h2>
    </div>
  );
};

export default App;
