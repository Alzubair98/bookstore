import React from 'react';

const Button = (props) => {
  const { name, Click } = props;
  return (
    <div>
      <button onClick={Click} className="button" type="button">{name}</button>
    </div>
  );
};

export default Button;
