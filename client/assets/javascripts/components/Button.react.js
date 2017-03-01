import React, { Component, PropTypes } from 'react';

const { string, func, any } = PropTypes;
const propTypes = {
  mod: string,
  type: string,
  onClick: func.isRequired,
  children: any
};

function Button ({ mod, type, onClick, children}) {
  const btnCss = mod ? 'hs_button -' + mod : 'hs_button';
  return <button className={btnCss} type={type} onClick={onClick}>{children}</button>
}

Button.propTypes = propTypes;

export default Button
