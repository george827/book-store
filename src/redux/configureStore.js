import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import bookReducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
},
applyMiddleware((thunk)));

export default store;
