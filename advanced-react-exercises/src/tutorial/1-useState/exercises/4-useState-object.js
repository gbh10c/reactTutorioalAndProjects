import React, { useState } from 'react';

const UseStateObject = () => {
  // const [person, setPerson] = useState({
  //   name: 'Peter',
  //   age: 24,
  //   message: 'Random message!',
  // });

  // CAN SET UP MULTIPLE STATE VALUES INSTEAD OF USING AN OBJECT
  const [name, setName] = useState('peter');
  const [age, setage] = useState(24);
  const [message, setMessage] = useState('Random message!');

  const changeMessage = () => {
    // SPREAD OPERATOR PRESERVES VALUES IN OBJECT WHEN UPDATING STATE
    // setPerson({ ...person, message: 'Hello, World!' });
    setMessage('Hello, World!');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className='btn' onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default UseStateObject;
