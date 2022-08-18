import React from 'react';
import Button from './button';

const Book = (props) => {
  const {
    catagory, completed, name, author, Click, id,
  } = props;
  return (
    <div className="Book-card">
      <div>
        <p className="book-paragraph">{catagory}</p>
        <h1 className="book-name">{name}</h1>
        <h3 className="book-author">{author}</h3>
        <div className="buttons-continer">
          <Button name="Comments" />
          <hr className="button-hr" />
          <Button Click={Click} id={id} name="Remove" />
          <hr className="button-hr" />
          <Button name="Edit" />
        </div>
      </div>
      <div className="second-continer">
        <div className="completed-continar">
          <h2 className="completed-h2">
            {completed}
            %
          </h2>
          <p className="completed-p">complete</p>
        </div>
        <div>
          <hr className="card-hr" />
        </div>
        <div>
          <p className="para-chapter">CURRENT CHAPTER</p>
          <h4 className="para-h4">Chapter 17</h4>
          <button type="button" className="button-form">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
