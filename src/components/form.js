import React from 'react';
import Button from './button';
import Input from './Input';

const Form = () => (
  <>
    <h3 className="form-text">Add New Books!</h3>
    <form className="form">
      <Input type="text" placholder="Enter Book Name" />
      <Input type="text" placholder="Enter Auther Name" />
      <Button name="Add Book" />
    </form>
  </>
);

export default Form;
