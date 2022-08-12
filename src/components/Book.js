import React from 'react';
import Button from './button';

const Book = (props) => {
  const {
    name, catagory, author, completed,
  } = props;
  return (
    <div className="Book-card">
      <div>
        <p className="book-paragraph">{catagory}</p>
        <h1 className="book-name">{name}</h1>
        <h3 className="book-author">{author}</h3>
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
  );
};

export default Book;
