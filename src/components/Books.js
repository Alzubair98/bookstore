import React from 'react';
import Book from './Book';
import Form from './form';

const Books = () => (
  <>
    <div className="Books-Continer">
      <Book name="First Book" catagory="action" author="unKnown" completed="61" />
    </div>
    <hr className="hr" />
    <Form />
  </>
);

export default Books;
