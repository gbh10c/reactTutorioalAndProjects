import React from 'react';

const Book = ({ img, title, author }) => {
  // Can destructure in parameters (like this) or in function call (const { img, title, author } = props)

  const clickHandler = (e) => {
    console.log(e.target);
    alert('HELLO WORLD');
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <div
      className='book'
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        REFERENCE EXAMPLE
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        COMPLEX EXAMPLE
      </button>
    </div>
  );
};

export default Book;