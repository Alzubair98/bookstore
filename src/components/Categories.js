import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CategorieFunction } from '../redux/categories/categories';

const Catagories = () => {
  const status = useSelector((state) => state.catReducer);
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(CategorieFunction())} className="button-form">Check Status</button>
      <h2>{status}</h2>
    </>
  );
};

export default Catagories;
