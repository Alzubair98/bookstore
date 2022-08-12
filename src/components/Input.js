import React from 'react';

const Input = (props) => {
  const { type, placholder } = props;
  return (
    <input className="input" type={type} placeholder={placholder} />
  );
};

export default Input;
