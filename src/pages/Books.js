import React from 'react';
import CreateNewBook from '../components/CreateNewBook';
import Book from '../components/Book';

const Books = () => (
  <>
    <div className="book-container">
      <Book />
      <div className="form-sec">
        <h2>Add New Book</h2>
        <CreateNewBook />
      </div>

    </div>
  </>
);

export default Books;
