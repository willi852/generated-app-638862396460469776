import React from 'react';

const CalculatorKeypad = ({ onButtonClick }) => {
  const buttons = [
    'C', '⌫', '(', ')', 'π',
    '7', '8', '9', '/', 'sin(',
    '4', '5', '6', '*', 'cos(',
    '1', '2', '3', '-', 'tan(',
    '0', '.', '=', '+', 'sqrt(',
    'log(', 'ln(', '^', 'e', '!'
  ];

  return (
    <div className="calculator-keypad">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => onButtonClick(button)}
          className={`keypad-button ${button === '=' ? 'equals' : ''}`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default CalculatorKeypad;