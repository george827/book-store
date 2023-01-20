import React from 'react';

const Book = ({ title, author }) => {
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
  </ul>;
};

export default Book;
