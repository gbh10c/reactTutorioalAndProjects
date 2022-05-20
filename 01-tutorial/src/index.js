import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import { books } from './books'; //curly braces required for named import
import Book from './Book';

const BookList = () => {
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);
