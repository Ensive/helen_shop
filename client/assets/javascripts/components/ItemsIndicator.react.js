// TODO: rename component (CartLink)
import React, { Component, PropTypes } from 'react'

const { number, objectOf, string, func } = PropTypes;
const propTypes = {
  count: number,
  t: objectOf(string),
  onCartToggle: func
};

function ItemsIndicator({ t, count, onCartToggle }) {
  return (
    <a className='header__link header__link--icon' onClick={onCartToggle} href='#' title={t.my_cart} aria-label={t.my_cart}>
      <i className='header__icon hs_icon -on-left icon-appicons-06' />
      <span className='header__text'>{count} items</span>
    </a>
  )
}

ItemsIndicator.propTypes = propTypes;

export default ItemsIndicator;
