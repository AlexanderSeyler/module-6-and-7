import React from 'react';
import {useState} from 'react';

function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const calculate = (calculation) => { 
    switch (calculation) {
      case 'add': setResult(num1 + num2);
        break;
      case 'subtract': setResult(num1 - num2);
        break;
      case 'multiply': setResult(num1 * num2);
        break;
      case 'divide': setResult(num1 / num2);
        break;
    }
  };

  return (
    <div className="CalculatorBox">
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />

      <button onClick={() => calculate('add')}>Add</button>
      <button onClick={() => calculate('subtract')}>Subtract</button>
      <button onClick={() => calculate('multiply')}>Multiply</button>
      <button onClick={() => calculate('divide')}>Divide</button>

      <div>
        <p>Total: {result}</p>
      </div>
    </div>
  );
}

export default Calculator;