import React, { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === 'DEL') {
      setInput((prev) => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator-container">
      <div className="calculator">
        <input type="text" value={input} readOnly />

        <div className="top-buttons">
          <button className="clear-btn" onClick={() => handleClick('C')}>C</button>
          <button className="delete-btn" onClick={() => handleClick('DEL')}>⨉</button>
        </div>

        <div className="buttons">
          {buttons.map((btn, i) => (
            <button key={i} onClick={() => handleClick(btn)}>{btn}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
