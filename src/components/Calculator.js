import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [operand, setOperand] = useState({});

  const printOn = (event) => {
    const buttonName = event.target.textContent;
    setOperand(calculate(operand, buttonName));
  };

  return (
    <div className="container">
      <h1 className="calculator-title">Math Magicians</h1>
      <h2 className="calculator-subtitle">Let&apos;s do some math!</h2>
      <div className="calculator-grid">
        <div className="output">
          {operand.total}
        &nbsp;
          {operand.operation}
        &nbsp;
          {operand.next}
        </div>
        <button type="button" onClick={printOn}>AC</button>
        <button type="button" onClick={printOn}>+/-</button>
        <button type="button" onClick={printOn}>%</button>
        <button type="button" className="operator" onClick={printOn}>÷</button>
        <button type="button" onClick={printOn}>7</button>
        <button type="button" onClick={printOn}>8</button>
        <button type="button" onClick={printOn}>9</button>
        <button type="button" className="operator" onClick={printOn}>x</button>
        <button type="button" onClick={printOn}>4</button>
        <button type="button" onClick={printOn}>5</button>
        <button type="button" onClick={printOn}>6</button>
        <button type="button" className="operator" onClick={printOn}>-</button>
        <button type="button" onClick={printOn}>1</button>
        <button type="button" onClick={printOn}>2</button>
        <button type="button" onClick={printOn}>3</button>
        <button type="button" className="operator" onClick={printOn}>+</button>
        <button type="button" className="occupy-two" onClick={printOn}>0</button>
        <button type="button" onClick={printOn}>.</button>
        <button type="button" className="operator" onClick={printOn}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
