import React from 'react';
import { useEmoji } from '../context/EmojiContext';

const Emoji = () => {
  const { isHappy, changeMood } = useEmoji();

  return (
    <div>
      <span role="img" aria-label={isHappy ? 'Happy Emoji' : 'Sad Emoji'}>
        {isHappy ? '😊' : '😢'}
      </span>
      <button onClick={changeMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;