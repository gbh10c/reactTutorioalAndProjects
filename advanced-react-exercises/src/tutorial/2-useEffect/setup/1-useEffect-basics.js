import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages (${value})`;
    } else {
      document.title = `No New Messages`;
    }
  }, [value]);

  // IF NO DEPENDENCY ARRAY, USEEFFECT WILL RUN AFTER EVERY RE-RENDER
  // IF USEEFFECT ONLY NEEDS TO RUN ON INITIAL RENDER, PASS BLANK DEPENCENCY ARRAY [] AS SECOND PARAMETER
  // THE CONTENTS OF THE ARRAY HELP SPECIFY WHEN USEEFFECT WILL RUN AFTER INITIAL RENDER - EACH TIME THE VALUE IS UPDATED, USEEFFECT RUNS (IN THIS CASE)

  useEffect(() => {
    console.log('HELLO WORLD!');
  }, []);

  // HELLO WORLD ONLY RUNS ON INITIAL RENDER BECAUSE OF THE BLANK DEPENDENCY ARRAY

  return (
    <>
      <h1>{value}</h1>
      <button
        className='btn'
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click Me!
      </button>
    </>
  );
};

export default UseEffectBasics;
