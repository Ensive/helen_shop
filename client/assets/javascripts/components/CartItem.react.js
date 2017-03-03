import React, {Component, PropTypes} from 'react';

const { string, number } = PropTypes;
const propTypes = {
  image_url: string,
  name: string,
  // TODO: make number
  price: string
};

function CartItem ({ image_url, name, price }) {
  return (
    <li className='cart__product'>
      <img className='cart__product-img' src={`/assets/${image_url}`} alt={name} />
      <span className='cart__product-name text text--medium'>{name}</span>
      <span className='cart__product-price text text--red text--medium'>{price}</span>
      <span className='cart__product-remove icon-appicons-20' />
    </li>
  );
}

CartItem.propTypes = propTypes;

export default CartItem;
