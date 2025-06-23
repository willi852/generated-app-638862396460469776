import React from 'react';

const CalculatorDisplay = ({ value, error }) => {
  return (
    <div className="calculator-display">
      <div className={`display-value ${error ? 'error' : ''}`}>{value}</div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CalculatorDisplay;