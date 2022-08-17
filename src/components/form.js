import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid-js';
import Button from './button';
import Input from './Input';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);

  return (
    <>
      <h3 className="form-text">Add New Books!</h3>
      <form className="form">
        <Input refe={title} type="text" placholder="Enter Book Name" />
        <Input refe={author} type="text" placholder="Enter Auther Name" />
        <Button name="Add Book" Click={() => dispatch(addBook(title.current.value, author.current.value, uuid.create().toString()))} />
      </form>
    </>
  );
};

export default Form;
