import { v4 as uuidv4 } from 'uuid';

export const ADD_BOOK = 'book-store/books/ADD';
export const REMOVE_BOOK = 'book-store/books/REMOVE';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: uuidv4(),
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: uuidv4(),
    title: 'Harry Potter',
    author: 'J. K. Rowling',
  },
  {
    id: uuidv4(),
    title: 'Harry Potter',
    author: 'J. K. Rowling',
  },
];

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    id: uuidv4(),
    title: book.title,
    author: book.author,
  },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};

export { addBook, removeBook };

export default bookReducer;
