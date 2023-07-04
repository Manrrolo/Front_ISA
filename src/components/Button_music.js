import React from 'react';

const Button = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <button className={'button1'} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
