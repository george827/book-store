import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, categorie,
}) => {
  const dispatch = useDispatch();

  const bookRemoveHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li className="the-book">
      <div className="book-content">
        <div className="book-info">
          <div className="book-details">
            <h4 className="book-categorie">
              {categorie}
            </h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>
          </div>
          <div className="book-btns">
            <button type="button">Comments</button>
            <div className="vertical-divider" />
            <button type="button" onClick={bookRemoveHandler}>Remove</button>
            <div className="vertical-divider" />
            <button type="button">Edit</button>
          </div>
        </div>
        {/* progress cicle */}
        <div className="bk-progress">
          <div className="progress-container">
            <div className="circular-progress-container">
              <div className="circular-progress" />
            </div>
            <div className="progress-stat">
              <p className="percent-complete">64%</p>
              <p className="completed">Completed</p>
            </div>
            <div className="progress-divider" />
            <div className="current-chapter-container">
              <div>
                <p className="current-chapter-label">CURRENT CHAPTER</p>
                <p className="current-chapter">Chapter 17</p>
              </div>
              <div>
                <button className="primary-button" type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
};

export default Book;
