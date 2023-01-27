import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import CreateNewBook from './CreateNewBook';
import { fetchBooks } from '../redux/books/books';

const Booklist = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <div className="book-container">
      <ul>
        {books.map((book) => (
          <Book
            book={book}
            key={book.item_id}
            id={book.item_id}
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
