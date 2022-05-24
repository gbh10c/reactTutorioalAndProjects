import React, { useState } from 'react';

// hooks start with 'use'
// the component name must be uppercase (see 'UseStateBasics' below)
// the hook must be in the function/component body
// cannot call the hook conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('Random Title');

  const handleClick = () => {
    if (text === 'Random Title') {
      setText('Hello, World!');
    } else {
      setText('Random Title');
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
