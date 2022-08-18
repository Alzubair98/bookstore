import React from 'react';

const Input = (props) => {
  const {
    type, placholder, change, value, name,
  } = props;
  return (
    <input name={name} className="input" value={value} onChange={change} type={type} placeholder={placholder} />
  );
};

export default Input;
