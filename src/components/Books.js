import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import Book from './Book';
import Form from './form';

const Books = () => {
  const bookList = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="Books-Continer">
        {bookList.map((book) => (
          <Book
            name={book.title}
            author={book.author}
            catagory="action"
            completed="61"
            key={book.key}
            Click={() => dispatch(removeBook(book.id))}
          />
        ))}
      </div>
      <hr className="hr" />
      <Form />
    </>
  );
};

export default Books;
