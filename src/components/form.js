import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from './Input';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [state, changeState] = useState({
    title: '',
    author: '',
    category: '',
  });
  const handel = (e) => {
    changeState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(state));
    changeState({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <>
      <h3 className="form-text">ADD NEW BOOK</h3>
      <form className="form" onSubmit={handelSubmit}>
        <Input name="title" value={state.title} change={handel} type="text" placholder="Enter Book Name" />
        <Input name="author" value={state.author} change={handel} type="text" placholder="Enter Auther Name" />
        <button type="submit" className="button-form">ADD BOOK</button>
      </form>
    </>
  );
};

export default Form;
