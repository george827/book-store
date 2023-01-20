import React from 'react';

const CreateNewBook = () => (
  <div>
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
);

export default CreateNewBook;
