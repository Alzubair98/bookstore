import React from 'react';

const Input = (props) => {
  const { type, placholder, refe } = props;
  return (
    <input ref={refe} className="input" type={type} placeholder={placholder} />
  );
};

export default Input;
