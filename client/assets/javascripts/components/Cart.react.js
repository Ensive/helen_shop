import React, { Component, PropTypes } from 'react'
import CartItem from './CartItem.react'

const { any, string, bool } = PropTypes;
const propTypes = {
  products: any,
  total: string,
  isVisible: bool
};

// TODO: replace index => product.id (in map)
function Cart ({ products, total, isVisible }) {
  return (
    <div className={`cart ${isVisible ? '' : 'is-hidden'}`}>
      <header className='cart__header'>
        <h2 className='text text--medium text--18'>You cart</h2>
        {/*<span className='cart__product-remove icon-appicons-20 u-right' />*/}
      </header>
      <hr className='u-divider' />
      <ul>
        {products.map((product, index) => <CartItem key={index} {...product} /> )}
      </ul>
      <hr className='u-divider' />
      <p className='cart__total'>Total: <span className='text text--medium'>{total}</span></p>
    </div>
  )
}

Cart.propTypes = propTypes;

export default Cart
