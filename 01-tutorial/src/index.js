import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <div className='book'>
      <Image />
      <Title />
      <Author />
    </div>
  );
};

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/51QjThE+F3L._SX381_BO1,204,203,200_.jpg'
      alt='Ballparks book cover'
    />
  );
};

const Title = () => {
  return (
    <div>
      <h1>Ballpark: Baseball in the American City</h1>
    </div>
  );
};

const Author = () => {
  return (
    <div>
      <h4>Paul Goldberger</h4>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
