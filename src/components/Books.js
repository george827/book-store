import React from 'react';
import PropTypes from 'prop-types';

const Books = (props) => {
  const { title, author } = props;
  return (
    <>
      <div className="book-container">
        <ul>
          <li className="the-book">
            <span>
              {title}
              {' '}
              Dune
            </span>
            <span>
              {author}
              {' '}
              Frank Herbert
            </span>
            <button type="submit">Remove</button>
          </li>
        </ul>
        <div className="form-sec">
          <h2>Add New Book</h2>
          <form className="form">
            <div>
              <input type="text" id="title1" className="title-input" placeholder="Book Title" />
            </div>
            <div className="book-type">
              <select className="title-input">
                <option value="Action">Action</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="Economy">Economy</option>
              </select>
            </div>
            <div className="submit-btn">
              <button type="submit">Add book</button>
            </div>
          </form>
        </div>

      </div>
    </>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
