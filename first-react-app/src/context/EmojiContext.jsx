import React, { createContext, useContext, useState } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const changeMood = () => {
    setIsHappy((prevIsHappy) => !prevIsHappy);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => {
  return useContext(EmojiContext);
};