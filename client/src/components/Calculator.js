import React, { useState } from 'react';
import axios from 'axios';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKeypad from './CalculatorKeypad';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [error, setError] = useState(null);

  const calculateResult = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/calculate', {
        expression: displayValue
      });
      setDisplayValue(response.data.result.toString());
      setError(null);
    } catch (err) {
      setError(err.response?.data?.error || 'Calculation error');
      setDisplayValue('Error');
    }
  };

  const handleButtonClick = (value) => {
    setError(null);
    
    if (displayValue === '0' || displayValue === 'Error') {
      setDisplayValue(value);
    } else if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setDisplayValue('0');
    } else if (value === '⌫') {
      setDisplayValue(displayValue.slice(0, -1) || '0');
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue} error={error} />
      <CalculatorKeypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;