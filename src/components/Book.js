import React from 'react';
import { useSelector } from 'react-redux';
import Button from './button';

const Book = (props) => {
  const booksList = useSelector((state) => state.bookReducer);
  const {
    catagory, completed,
  } = props;
  return (booksList.map((book) => (
    <div className="Book-card" key={book.id}>
      <div>
        <p className="book-paragraph">{catagory}</p>
        <h1 className="book-name">{book.title}</h1>
        <h3 className="book-author">{book.author}</h3>
        <div className="buttons-continer">
          <Button name="Comments" />
          <Button name="Remove" />
          <Button name="Edit" />
        </div>
      </div>
      <div className="completed-continar">
        <h2 className="completed-h2">
          {completed}
          %
        </h2>
        <p className="completed-p">complete</p>
      </div>
    </div>
  )));
};

export default Book;
