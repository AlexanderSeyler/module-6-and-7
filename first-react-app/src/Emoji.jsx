import React, { useState } from 'react';

const Emoji = () => {
  const [isHappy, setIsHappy] = useState(true);

  const changeMood = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  return (
    <div>
      <span role="img" aria-label={isHappy ? "Happy Emoji" : "Sad Emoji"}>
        {isHappy ? '😊' : '😢'}
      </span>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;