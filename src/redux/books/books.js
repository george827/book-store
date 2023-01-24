import { createReducer } from '@reduxjs/toolkit';

export const ADD_BOOK = 'book-store/books/ADD';
export const REMOVE_BOOK = 'book-store/books/REMOVE';

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

const bookReducer = createReducer([], {
  [ADD_BOOK]: (state, action) => {
    state.push(action.book);
  },
  [REMOVE_BOOK]: (state, action) => {
    state.filter((book) => book.id !== action.book.id);
  },
});

export default bookReducer;
