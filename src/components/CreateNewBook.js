import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const CreateNewBook = () => {
  const [title, Title] = useState('');
  const [author, Author] = useState('');
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };

    if (title !== '' && author !== '') {
      dispatch(addBook(book));
      Title('');
      Author('');
    }
  };

  return (
    <div>
      <form className="form">
        <div>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => Title(e.target.value)}
            className="title-input"
            placeholder="Book Title"
            required
          />
          <input
            type="text"
            id="title"
            name="author"
            value={author}
            onChange={(e) => Author(e.target.value)}
            className="title-input"
            placeholder="Book Author"
            required
          />
        </div>
        <div className="book-type">
          <select className="title-input">
            <option value="Action">Action</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Economy">Economy</option>
          </select>
        </div>
        <div className="submit-btn">
          <button type="button" onClick={addHandler}>Add book</button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewBook;
