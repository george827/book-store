import React from 'react';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

const Booklist = () => (
  <div className="book-container">
    <Book />
    <div className="form-sec">
      <h2>Add New Book</h2>
      <CreateNewBook />
    </div>

  </div>
);

export default Booklist;
