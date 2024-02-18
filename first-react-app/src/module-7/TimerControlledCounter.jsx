import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timerInterval;

    if (count > 0) {
      timerInterval = setInterval(() => {
        console.log("tick");
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    } else {
      setElapsedTime(0);
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      {count > 0 && (
        <div>
          <p>Elapsed Time: {elapsedTime} seconds</p>
          <p>Current Count: {count}</p>
        </div>
      )}
    </div>
  );
};

export default Counter;