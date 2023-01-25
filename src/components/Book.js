import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ id, title, author }) => {
  const dispatch = useDispatch();

  const bookRemoveHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li className="the-book">
      <span>
        {title}
      </span>
      <span>
        {author}
      </span>
      <button type="button" onClick={bookRemoveHandler}>Remove</button>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
