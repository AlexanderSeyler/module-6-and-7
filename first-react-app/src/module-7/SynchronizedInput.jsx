import React, { useState, useEffect } from 'react';

const SynchronizedInputs = () => {
  // redundant code can run without
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(inputValue);
  }, [inputValue]);

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <label>
        Input 1: <input type="text" value={inputValue} onChange={inputChange} />
      </label>
      <label>
        Input 2: <input type="text" value={inputValue} onChange={inputChange} />
      </label>
    </div>
  );
};

export default SynchronizedInputs;