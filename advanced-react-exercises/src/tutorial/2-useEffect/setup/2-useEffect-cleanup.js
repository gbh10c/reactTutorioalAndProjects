import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      // CLEANUP FUNCTION REMOVES EVENT LISTENERS TO SAVE SPACE
      window.removeEventListener('resize', checkSize);
    };
  });

  // THIS CAN ALSO BE DONE WITH A BLANK DEPENDENCY ARRAY, BUT IT IS BETTER PRACTICE TO USE THE CLEANUP FUNCTION

  return (
    <>
      <h1>Window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
