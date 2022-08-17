import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './button';
import { CategorieFunction } from '../redux/categories/categories';

const Catagories = () => {
  const status = useSelector((state) => state.catReducer);
  const dispatch = useDispatch();

  return (
    <>
      <Button Click={() => dispatch(CategorieFunction())} name="Check Status" />
      <h2>{status}</h2>
    </>
  );
};

export default Catagories;
