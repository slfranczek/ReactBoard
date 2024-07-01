// src/components/Cell/Cell.js
import React from 'react';
import './Cell.css';  // Importing the CSS file for styling

const Cell = ({ index }) => {  // Accept the index as a prop
  return (
    <div className="cell">
      {index} 
    </div>
  );
};

export default Cell;
