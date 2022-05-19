import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
  <section>
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
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/51QjThE+F3L._SX381_BO1,204,203,200_.jpg' alt='Ballparks book cover'
    />
  );
}

const Title = () => {
  return (
    <article>
      <h1>Ballpark: Baseball in the American City</h1>
    </article>
  )
}

const Author = () => {
  return (
    <article>
      <h4>Paul Goldberger</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookList />
  </React.StrictMode>
);