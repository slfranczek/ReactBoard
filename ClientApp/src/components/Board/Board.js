// src/components/Board.js
import React from 'react';
import Cell from '../Cell/Cell';  
import './Board.css';     

const Board = ({ size }) => {
  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < size; i++) {
      const cells = [];
      for (let j = 0; j < size; j++) {
        cells.push(<Cell key={`${i}-${j}`} index={`${i}-${j}`} />);
      }
      rows.push(<div className="row" key={i}>{cells}</div>);
    }
    return rows;
  };

  return (
    <div className="board">
      {renderRows()} 
    </div>
  );
};

export default Board;
