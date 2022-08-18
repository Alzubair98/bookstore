import React from 'react';

const Button = (props) => {
  const {
    name, Click, id,
  } = props;
  return (
    <div>
      <button type="button" id={id} onClick={Click} className="button">{name}</button>
    </div>
  );
};

export default Button;
