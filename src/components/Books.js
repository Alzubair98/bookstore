import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBook, removeBook } from '../redux/books/books';
import Book from './Book';
import Form from './form';

const Books = () => {
  const bookList = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBook());
  }, []);

  const handelDelete = (e) => {
    dispatch(removeBook(e.target.id));
  };

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
            id={book.id}
            Click={handelDelete}
          />
        ))}
      </div>
      <hr className="hr" />
      <Form />
    </>
  );
};

export default Books;
