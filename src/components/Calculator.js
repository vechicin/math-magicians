import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { operand: {} };
  }

  printOn = (event) => {
    const buttonName = event.target.textContent;
    const { operand } = this.state;
    this.setState({
      operand: calculate(operand, buttonName),
    });
  }

  render() {
    const { operand } = this.state;
    return (
      <div className="calculator-grid">
        <div className="output">
          {operand.next}
          {operand.operation}
          {operand.total}
        </div>
        <button type="button" onClick={this.printOn}>AC</button>
        <button type="button" onClick={this.printOn}>+/-</button>
        <button type="button" onClick={this.printOn}>%</button>
        <button type="button" className="operator" onClick={this.printOn}>÷</button>
        <button type="button" onClick={this.printOn}>7</button>
        <button type="button" onClick={this.printOn}>8</button>
        <button type="button" onClick={this.printOn}>9</button>
        <button type="button" className="operator" onClick={this.printOn}>x</button>
        <button type="button" onClick={this.printOn}>4</button>
        <button type="button" onClick={this.printOn}>5</button>
        <button type="button" onClick={this.printOn}>6</button>
        <button type="button" className="operator" onClick={this.printOn}>-</button>
        <button type="button" onClick={this.printOn}>1</button>
        <button type="button" onClick={this.printOn}>2</button>
        <button type="button" onClick={this.printOn}>3</button>
        <button type="button" className="operator" onClick={this.printOn}>+</button>
        <button type="button" className="occupy-two" onClick={this.printOn}>0</button>
        <button type="button" onClick={this.printOn}>.</button>
        <button type="button" className="operator" onClick={this.printOn}>=</button>
      </div>
    );
  }
}

export default Calculator;
