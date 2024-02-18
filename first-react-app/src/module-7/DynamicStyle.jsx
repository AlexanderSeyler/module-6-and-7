import React, { useState, useEffect } from 'react';

const DynamicStyleComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [styles, setStyles] = useState({
    padding: '10px',
    border: '1px solid black',
    backgroundColor: 'lightgray',
    cursor: 'pointer',
  });

  useEffect(() => {
    const backgroundColor = isClicked ? 'lightblue' : 'lightgray';
    setStyles({
      ...styles,
      backgroundColor: backgroundColor,
    });
  }, [isClicked]);

  const handleClick = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return (
    <div
      id="dynamicStyleComponent"
      style={styles}
      onClick={handleClick}
    >
      Change Style
    </div>
  );
};

export default DynamicStyleComponent;