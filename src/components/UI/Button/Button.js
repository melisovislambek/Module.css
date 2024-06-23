import React from 'react';

import classes from './Button.module.css';  /// classes object болуп калат

const Button = props => {
  return (
    <button type={props.type} className={classes.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
