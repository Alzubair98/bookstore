import React from 'react';

const Button = (props) => {
  const { name } = props;
  return (
    <div>
      <button className="button" type="button">{name}</button>
    </div>
  );
};

export default Button;
