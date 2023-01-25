import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

const Booklist = () => {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-container">
      <ul>
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            id={book.id}
            author={book.author}
            title={book.title}
          />
        ))}
      </ul>
      <div className="form-sec">
        <h2>Add New Book</h2>
        <CreateNewBook />
      </div>

    </div>
  );
};

export default Booklist;
