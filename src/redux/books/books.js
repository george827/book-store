import { createAsyncThunk } from '@reduxjs/toolkit';

export const ADD_BOOK = 'book-store/books/ADD';
export const REMOVE_BOOK = 'book-store/books/REMOVE';
const GET_BOOKS = 'book-store/books/FETCH_BOOKS';
const BOOKS_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ByEMUXfCFCLCsfc14Scd/books';//   ByEMUXfCFCLCsfc14Scd

export const fetchBooks = createAsyncThunk(
  GET_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(BOOKS_URL);
    const data = await response.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      item_id: id,
    }));
    dispatch({
      type: GET_BOOKS,
      books,
    });
  },
);

// add book action
const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book, { dispatch }) => {
    await fetch(BOOKS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD_BOOK,
      book,
    });
  },
);
// remove book action
const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${BOOKS_URL}/${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  },
);

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.books;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.id)];
    default:
      return state;
  }
};

export { addBook, removeBook }; // export the actions

export default bookReducer;
