import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import catReducer from './categories/categories';

const store = configureStore({
  reducer: {
    bookList: bookReducer,
    catReducer,
  },
});

export default store;
