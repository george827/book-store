import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const createBook = (title, author) => (
  {
    item_id: uuidv4(),
    title,
    author,
    category: 'Action',
  }
);

const CreateNewBook = () => {
  const titleValue = useRef();
  const authorValue = useRef();
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    const title = titleValue.current.value;
    const author = authorValue.current.value;

    if (title !== '' && author !== '') {
      dispatch(addBook(createBook(title, author)));
      titleValue.current.value = '';
      authorValue.current.value = '';
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
            ref={titleValue}
            className="title-input"
            placeholder="Book Title"
            required
          />
          <input
            type="text"
            id="title"
            name="author"
            ref={authorValue}
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
