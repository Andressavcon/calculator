import React from 'react';

export const Button = ({ value, onClick, className, ...props }) => {
  return (
    <div>
      <button className={className} value={value} onClick={onClick} {...props}>
        {value}
      </button>
    </div>
  );
};
